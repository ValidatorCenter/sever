all: generate bin/vcapid bin/vctool vendor ;

generate:
	protoc -I./defs \
	    --js_out=import_style=commonjs,binary:./defs \
	    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./defs \
	    --grpc-gateway_out=logtostderr=true,grpc_api_configuration=./defs/api.gw.yaml:./defs \
	    --go_out=plugins=grpc:./defs ./defs/api.proto

bin/vcapid:
	go build -v -o ./bin/vcapid ./cmd/vcapid/main.go

bin/vctool:
	go build -v -o ./bin/vctool ./cmd/vctool/main.go

vendor:
	go mod vendor

clean:
	rm -f bin/vcapid bin/vctool

install: bin/vcapid
	cp bin/vcapid /usr/local/bin/vcapid
	cp etc/vcapid.service /lib/systemd/system
	systemctl daemon-reload

.PHONY: all generate bin/* clean test
