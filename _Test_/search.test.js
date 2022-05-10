const app = require("../app");
const request = require("supertest");

describe(`Get tracks or playlists`, () => {
  describe(`GET /search on success`, () => {
    it(`should return an object with status code 200`, async () => {
      const res = await request(app).get("/search?name=what");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("tracks");
      expect(res.body).toHaveProperty("playlists");
    });
  });
  describe(`GET /search on failure input not in English`, () => {
    it(`should return an object with status code 400`, async () => {
      const res = await request(app).get("/search?name=kamu");
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("message");
    });
  });
});
