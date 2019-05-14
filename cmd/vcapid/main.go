package main

import (
	"context"
	"flag"
	"fmt"
	"net"
	"net/http"
	"runtime"
	"time"

	"github.com/golang/glog"
	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-middleware/recovery"
	gwr "github.com/grpc-ecosystem/grpc-gateway/runtime"
	"google.golang.org/grpc"

	"sever/defs"
	"sever/platform"
)

var (
	grpcListen = flag.String("grpc_listen", ":50051", "grpc listen addr")
	httpListen = flag.String("http_listen", "", "http listen addr")

	clickhouseDsn             = flag.String("clickhouse_dsn", "http://127.0.0.1:8123/default", "clickhouse instance to connect to")
	clickhouseMaxOpenConns    = flag.Int("clickhouse_max_open_conns", 50, "clickhouse pool max open conns")
	clickhouseMaxIdleConns    = flag.Int("clickhouse_max_idle_conns", 10, "clickhouse pool max idle conns")
	clickhouseConnMaxLifetime = flag.Duration("clickhouse_conn_max_lifetime", 10*time.Minute, "clickhouse pool max conn lifetime")
)

func run() error {
	ln, err := net.Listen("tcp", *grpcListen)
	if err != nil {
		return fmt.Errorf("unable to listen `%s': %s", *grpcListen, err)
	}

	gs := grpc.NewServer(
		grpc.StreamInterceptor(grpc_middleware.ChainStreamServer(
			grpc_recovery.StreamServerInterceptor(grpc_recovery.WithRecoveryHandler(unpanic)),
		)),
		grpc.UnaryInterceptor(grpc_middleware.ChainUnaryServer(
			grpc_recovery.UnaryServerInterceptor(grpc_recovery.WithRecoveryHandler(unpanic)),
		)),
	)

	ps, err := platform.NewHandler(&platform.Options{
		ClickhouseDSN: *clickhouseDsn,
		ClickhousePoolOpts: &platform.PoolOptions{
			MaxOpenConns:    *clickhouseMaxOpenConns,
			MaxIdleConns:    *clickhouseMaxIdleConns,
			ConnMaxLifetime: *clickhouseConnMaxLifetime,
		},
	})
	if err != nil {
		glog.Fatalf("unable to setup platform: %s", err)
	}

	defs.RegisterPlatformAPIServer(gs, ps)

	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	// NOTE(m.galaganov): possible race condition at startup.
	if *httpListen != "" {
		go func() {
			glog.Fatal(runGateway(ctx))
		}()
	}

	glog.Infof("Ready to serve gRPC at `%s'.", *grpcListen)
	return fmt.Errorf("unable to serve: %s", gs.Serve(ln))
}

func runGateway(ctx context.Context) error {
	mux := gwr.NewServeMux()
	err := defs.RegisterPlatformAPIHandlerFromEndpoint(ctx, mux, *grpcListen, []grpc.DialOption{grpc.WithInsecure()})
	if err != nil {
		return fmt.Errorf("unable to register http handler: %s", err)
	}

	glog.Infof("Ready to serve HTTP at `%s'.", *httpListen)
	return http.ListenAndServe(*httpListen, mux)
}

func unpanic(p interface{}) (err error) {
	trace := make([]byte, 8192)
	n := runtime.Stack(trace, false)
	glog.Errorf("panic stack trace: %s", string(trace[:n]))
	return platform.ErrPanic
}

func main() {
	flag.Parse()
	defer glog.Flush()

	if err := run(); err != nil {
		glog.Fatal(err)
	}
}
