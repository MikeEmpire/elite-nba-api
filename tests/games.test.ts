import app from "../src";
import request from "supertest";

describe("Able to get information about games today", () => {
  return it("Able to get today's games and info", async (): Promise<void> => {
    const PATH: string = `/api/games`;
    const result = await request(app).get(PATH).send();
    expect(result.status).toBe(200);
    expect(result.body.data).toHaveProperty("numGames");
  });
});
