import request from "supertest";
import app from "../src";

describe("Test app", () => {
  return it("Request app", async (): Promise<void> => {
    const result = await request(app).get("/").send();
    expect(result.status).toBe(200);
    expect(result.body).toStrictEqual({});
  });
});
