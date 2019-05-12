all:
	protoc -I defs --js_out=import_style=commonjs:./defs --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./defs --go_out=plugins=grpc:./defs ./defs/api.proto
