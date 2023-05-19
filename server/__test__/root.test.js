import request from "supertest";
import app from "../index";

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app.callback()).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("Url not found", async () => {
    const response = await request(app.callback()).get("/product2s");
    expect(response.statusCode).toBe(404);
  });
});
