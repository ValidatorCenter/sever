package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/golang/glog"
	"google.golang.org/grpc"
	"sever/defs"
	"time"
)

var (
	addr = flag.String("addr", "127.0.0.1:9090", "grpc server address")
)

func run() error{
	glog.Infof("will connect to `%s'", *addr)
	conn, err := grpc.Dial(*addr, grpc.WithInsecure())
	if err != nil {
		return fmt.Errorf("could not connect: %s", err)
	}
	defer conn.Close()

	c := defs.NewPlatformAPIClient(conn)
	ctx, _ := context.WithTimeout(context.Background(), 1*time.Second)

	r, err := c.SessionCreate(ctx, &defs.SeedPhrase{})
	glog.Infof("result: %+v", r)
	if err != nil {
		glog.Errorf("error: %+v", err)
	}

	return nil
}

func main() {
	flag.Parse()
	defer glog.Flush()

	if err := run(); err != nil {
		glog.Fatal(err)
	}
}
