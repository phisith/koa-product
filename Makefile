.PHONY: build up down log-server exec-server migrate-db

build:
	docker-compose build
up:
	docker-compose up -d && \
	make migrate-db
down:
	docker-compose down -v
log-server:
	docker logs -f -t koa-product-server-1
exec-server:
	docker exec -it koa-product-server-1 /bin/sh
migrate-db:
	docker exec -it  koa-product-server-1 /bin/sh -c "npx prisma migrate dev --name init"