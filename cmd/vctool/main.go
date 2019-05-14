package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/golang/glog"
	"google.golang.org/grpc"
	"sever/defs"
	"strconv"
	"time"
)

var (
	addr = flag.String("addr", "127.0.0.1:50051", "grpc server address")
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

	args := flag.Args()
	number, _ := strconv.Atoi(args[0])
	r, err := c.BlockOne(ctx, &defs.BlockInfoReq{Number: uint32(number)})
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
