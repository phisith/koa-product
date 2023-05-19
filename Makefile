.PHONY: build up down log-server exec-server migrate-db

build:
	docker-compose build

up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d && \
	make migrate-db

down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

up-test:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d && \
	make migrate-db && \
	make exec-server

log-server:
	docker logs -f -t koa-product-server-1

exec-server:
	docker exec -it koa-product-server-1 /bin/sh
	
migrate-db:
	docker exec -it  koa-product-server-1 /bin/sh -c "npx prisma migrate dev --name init"