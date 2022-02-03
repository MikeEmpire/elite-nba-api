import app from "../src";
import request from "supertest";

describe("Able to get player data from API", () => {
  it("Able to get Lebron's season stats", async (): Promise<void> => {
    const lebronURL =
      "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png";
    const PATH: string = `/api/players?player_name=LebronJames`;
    const result = await request(app).get(PATH).send();
    expect(result.status).toBe(200);
    expect(result.body.data[0]).toHaveProperty("ast");
    expect(result.body.player_image_url).toBe(lebronURL);
  });
  return it("Able to get all stats", async (): Promise<void> => {
    const url: string = "/api/players/all";
    const result = await request(app).get(url);
    expect(result.status).toBe(200);
    expect(result.body.players[0]).toHaveProperty("lastName");
  });
});
