import Router from "koa-router";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.js";
const router = new Router();

router
  .get("/product", getProduct)
  .get("/products", getProducts)
  .post("/product", createProduct)
  .put("/product/:id", updateProduct)
  .del("/product/:id", deleteProduct);

export { router };
