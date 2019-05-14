all: bin/vcapid bin/vctool
	

generate:
	protoc -I./defs --js_out=import_style=commonjs:./defs --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./defs --grpc-gateway_out=logtostderr=true,grpc_api_configuration=./defs/api.gw.yaml:./defs --go_out=plugins=grpc:./defs ./defs/api.proto

bin/vcapid:
	go build -v -o ./bin/vcapid ./cmd/vcapid/main.go

bin/vctool:
	go build -v -o ./bin/vctool ./cmd/vctool/main.go

test:
	go test sever/platform

clean:
	rm -f bin/vcapid bin/vctool

install: bin/vcapid
	cp bin/vcapid /usr/local/bin/vcapid
	cp etc/vcapid.service /lib/systemd/system
	systemctl daemon-reload

.PHONY: all generate bin/* clean test
