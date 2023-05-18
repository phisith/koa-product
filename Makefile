.PHONY: build up down log-server exec-server

build:
	docker-compose build
up:
	docker-compose up -d
down:
	docker-compose down -v
log-server:
	docker logs -f -t koa-product-server-1
exec-server:
	docker exec -it koa-product-server-1 /bin/sh