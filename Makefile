.PHONY: build up down log-server

build:
	docker-compose build
up:
	docker-compose up -d
down:
	docker-compose down -v
log-server:
	docker logs -f -t koa-product-server-1