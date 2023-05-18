import Koa from "koa";
import Router from "koa-router";
import { router as proudctRouter } from "./src/routers/product.js";

const PORT = 8000;

const app = new Koa();

const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "Hello Nimble!";
});

app.use(router.routes(), router.allowedMethods());
app.use(proudctRouter.routes(), proudctRouter.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is listen to port ${PORT}`);
});
