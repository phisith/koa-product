import Router from "koa-router";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.js";
const router = new Router();

router
  .get("/product", getProduct)
  .post("/product", createProduct)
  .put("/product/:id", updateProduct)
  .del("/product/:id", deleteProduct);

export { router };
