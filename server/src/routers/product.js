import Router from "koa-router";
import { createProduct } from "../controllers/product.js";
const router = new Router();

// router.get("/products", getProducts);

// function* getProducts() {
//   this.body = "Hi";
// }

router
  .get("/products", (ctx, next) => {
    ctx.body = "Product List!";
  })
  .post("/products", createProduct);

export { router };
