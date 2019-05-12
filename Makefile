grpc_gateway_module_path := $(shell go list -f '{{ .Dir }}' -m github.com/grpc-ecosystem/grpc-gateway)

all: bin/vcapid

generate: check-vars
	protoc -I$(grpc_gateway_module_path)/third_party/googleapis -I./defs --js_out=import_style=commonjs:./defs --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./defs --grpc-gateway_out=logtostderr=true:./defs --go_out=plugins=grpc:./defs ./defs/api.proto

check-vars:
	test -n "$(grpc_gateway_module_path)"

bin/vcapid: generate
	go build -v -o ./bin/vcapid ./cmd/vcapid/main.go

.PHONY: all generate check-vars
