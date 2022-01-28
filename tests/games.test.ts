import app from "../src";
import request from "supertest";

describe("Able to get necessary data from API", () => {
  return it("Able to get Lebron's season stats", async (): Promise<void> => {
    const PATH: string = `/api/games`;
    const result = await request(app).get(PATH).send();
    expect(result.status).toBe(200);
    expect(result.body.data).toHaveProperty("numGames");
  });
});
