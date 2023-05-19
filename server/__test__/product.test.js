import request from "supertest";
import app from "../index";

describe("Test Product controllers", () => {
  test("Create new Product", async () => {
    const response = await request(app.callback())
      .post("/product")
      .send({
        product: {
          name: "Macbook M10 pro",
          description: "Gonna be extremly expensive",
        },
      });
    expect(JSON.parse(response.text).name).toStrictEqual("Macbook M10 pro");
  });

  test("Create new Product (not pressing correct format)", async () => {
    const response = await request(app.callback())
      .post("/product")
      .send({
        data: {
          name: "Macbook M10 pro",
          description: "Gonna be extremly expensive",
        },
      });
    expect(response.text).toContain("Please provide product to create");
  });

  test("Return all product in database", async () => {
    const response = await request(app.callback()).get("/products");
    expect(response.text.length).toBeGreaterThan(0);
  });

  test("Return Single Product", async () => {
    const response = await request(app.callback())
      .get("/product")
      .query({ id: 1 });

    const expectedResult = [
      {
        id: 1,
        name: "Macbook M10 pro",
        description: "Gonna be extremly expensive",
      },
    ];

    expect(JSON.parse(response.text)).toMatchObject(expectedResult);
  });

  test("Return Single Product (without passing id)", async () => {
    const response = await request(app.callback()).get("/product");
    expect(response.text).toStrictEqual(
      "Please provide id for view product detail"
    );
  });

  test("Create and Update Product description", async () => {
    const result = await request(app.callback())
      .post("/product")
      .send({
        product: {
          name: "Iphone XL",
          description: "XL ?",
        },
      });

    const productId = JSON.parse(result.text).id;

    const response = await request(app.callback())
      .put(`/product/${productId}`)
      .send({
        product: { description: "XL the bigger phone :)" },
      });
    expect(JSON.parse(response.text).description).toStrictEqual(
      "XL the bigger phone :)"
    );
  });

  test("Create and Delete product", async () => {
    const result = await request(app.callback())
      .post("/product")
      .send({
        product: {
          name: "Iphone XG",
          description: "what is this Iphone ?",
        },
      });

    const productId = JSON.parse(result.text).id;

    const response = await request(app.callback()).delete(
      `/product/${productId}`
    );
    expect(response.status).toBe(200);
  });
});
