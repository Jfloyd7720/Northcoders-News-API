const endpointsJson = require("../endpoints.json");
const request = require("supertest");
const data = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const app = require("../app");

/* Set up your beforeEach & afterAll functions here */
beforeEach(() => {
  return seed(data);
});

describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body: { endpoints } }) => {
        expect(endpoints).toEqual(endpointsJson);
      });
  });
});
