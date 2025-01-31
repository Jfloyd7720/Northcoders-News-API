const endpointsJson = require("../endpoints.json");
const request = require("supertest");
const data = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const app = require("../app");
const db = require("../db/connection");

/* Set up your beforeEach & afterAll functions here */
beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  db.end();
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
describe("GET /api/articles", () => {
  test("200: Responds with all the data from the articles tables", () => {
    const expectedResult = [
      {
        author: "icellusedkars",
        title: "Eight pug gifs that remind me of mitch",
        article_id: 3,
        topic: "mitch",
        created_at: "2020-11-03T09:12:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "2",
      },
      {
        author: "icellusedkars",
        title: "A",
        article_id: 6,
        topic: "mitch",
        created_at: "2020-10-18T01:00:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "1",
      },
      {
        author: "icellusedkars",
        title: "Sony Vaio; or, The Laptop",
        article_id: 2,
        topic: "mitch",
        created_at: "2020-10-16T05:03:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "butter_bridge",
        title: "Moustache",
        article_id: 12,
        topic: "mitch",
        created_at: "2020-10-11T11:24:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "butter_bridge",
        title: "Another article about Mitch",
        article_id: 13,
        topic: "mitch",
        created_at: "2020-10-11T11:24:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "rogersop",
        title: "UNCOVERED: catspiracy to bring down democracy",
        article_id: 5,
        topic: "cats",
        created_at: "2020-08-03T13:14:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "2",
      },
      {
        author: "butter_bridge",
        title: "Living in the shadow of a great man",
        article_id: 1,
        topic: "mitch",
        created_at: "2020-07-09T20:11:00.000Z",
        votes: 100,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "11",
      },
      {
        author: "butter_bridge",
        title: "They're not exactly dogs, are they?",
        article_id: 9,
        topic: "mitch",
        created_at: "2020-06-06T09:10:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "2",
      },
      {
        author: "rogersop",
        title: "Seven inspirational thought leaders from Manchester UK",
        article_id: 10,
        topic: "mitch",
        created_at: "2020-05-14T04:15:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "rogersop",
        title: "Student SUES Mitch!",
        article_id: 4,
        topic: "mitch",
        created_at: "2020-05-06T01:14:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "icellusedkars",
        title: "Does Mitch predate civilisation?",
        article_id: 8,
        topic: "mitch",
        created_at: "2020-04-17T01:08:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "icellusedkars",
        title: "Am I a cat?",
        article_id: 11,
        topic: "mitch",
        created_at: "2020-01-15T22:21:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "icellusedkars",
        title: "Z",
        article_id: 7,
        topic: "mitch",
        created_at: "2020-01-07T14:08:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
    ];
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(expectedResult);
        // use foreach to loop through array and check eachh has correct keys
        // check that each object has the properties of the correct data types we're expecting - typeo/.objectcontaining
        //  use jest sorted to check order
      });
  });
});
describe("GET /api/topics", () => {
  test("200: Responds with all the data from the topics tables", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual([
          { slug: "mitch", description: "The man, the Mitch, the legend" },
          { slug: "cats", description: "Not dogs" },
          { slug: "paper", description: "what books are made of" },
        ]);
      });
  });
});
describe("GET invalid endpoint", () => {
  test("404: Responds with error message for invalid endpoint", () => {
    return request(app)
      .get("/api/topic")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ error: "endpoint not found" });
      });
  });
});
describe("GET article by id endpoint", () => {
  test("returns the article with the correct id", () => {
    const expectedResponse = [
      {
        article_id: 1,
        title: "Living in the shadow of a great man",
        topic: "mitch",
        author: "butter_bridge",
        body: "I find this existence challenging",
        created_at: "2020-07-09T20:11:00.000Z",
        votes: 100,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
      },
    ];
    return request(app)
      .get("/api/articles/1")
      .expect(200)
      .then((res) => {
        expect(res.body.data).toEqual(expectedResponse);
      });
  });
  test("returns 404 when article_id does not exist", async () => {
    await request(app)
      .get("/api/articles/9789")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "article_id does not exist" });
      });
  });
});
describe("GET /api/articles/1/comments endpoint", () => {
  test("Check returns array of expected length", () => {
    return request(app)
      .get("/api/articles/1/comments")
      .expect(200)
      .then((res) => {
        expect(res.body.length).toEqual(11);
      });
  });
  test("Check returns array with each object containg expected properties", () => {
    return request(app)
      .get("/api/articles/1/comments")
      .expect(200)
      .then((res) => {
        res.body.forEach((comment) => {
          expect(comment).toHaveProperty("article_id");
          expect(comment).toHaveProperty("author");
          expect(comment).toHaveProperty("body");
          expect(comment).toHaveProperty("comment_id");
          expect(comment).toHaveProperty("created_at");
          expect(comment).toHaveProperty("votes");
          expect(Object.keys(comment).length).toEqual(6);
        });
      });
  });
  test("Check returns array with each object containg no extra properties", () => {
    return request(app)
      .get("/api/articles/1/comments")
      .expect(200)
      .then((res) => {
        res.body.forEach((comment) => {
          expect(Object.keys(comment).length).toEqual(6);
        });
      });
  });
  test("returns 404 when article_id does not exist", () => {
    return request(app)
      .get("/api/articles/9789/comments")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "article_id does not exist" });
      });
  });
});
describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    const comment = { author: "rogersop", body: "random message" };
    return request(app)
      .post("/api/articles/1/comments")
      .send(comment)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual([
          {
            comment_id: 19,
            body: "random message",
            article_id: 1,
            author: "rogersop",
            votes: 0,
            created_at: expect.any(String),
          },
        ]);
      });
  });
});
describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    const comment = { author: "rogersop", body: "random message" };
    return request(app)
      .post("/api/articles/897987/comments")
      .send(comment)
      .expect(400)
      .then((res) => {
        expect(res.body).toEqual({ message: "article_id does not exist" });
      });
  });
});
describe("PATCH /api/articles/:article_id", () => {
  test("200: Responds with object with updated votes count", () => {
    const comment = { inc_votes: 13 };
    return request(app)
      .patch("/api/articles/1")
      .send(comment)
      .expect(200)
      .then((res) => {
        expect(res.body[0]).toHaveProperty("article_id");
        expect(res.body[0]).toHaveProperty("title");
        expect(res.body[0]).toHaveProperty("topic");
        expect(res.body[0]).toHaveProperty("author");
        expect(res.body[0]).toHaveProperty("body");
        expect(res.body[0]).toHaveProperty("article_img_url");
        expect(res.body[0].votes).toEqual(113);
      });
  });
  test("404: responds with article_id does not exist", () => {
    const comment = { inc_votes: 13 };
    return request(app)
      .patch("/api/articles/7688")
      .send(comment)
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "article_id does not exist" });
      });
  });
});
describe("DELETE /api/comments/:comment_id", () => {
  test("204: Responds with no content when the comment is deleted", () => {
    return request(app).delete("/api/comments/1").expect(204);
  });
  test("404: responds with comment_id does not exist", () => {
    return request(app)
      .delete("/api/comments/897")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "comment_id does not exist" });
      });
  });
  test("400: responds with comment_id does not exist", () => {
    return request(app)
      .delete("/api/comments/kjh")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({
          message: "invalid data type for comment_id",
        });
      });
  });
});

describe("GET /api/users", () => {
  test("200: Responds with an array of all users, each containing username, name, and avatar_url", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then((res) => {
        res.body.forEach((user) => {
          expect(user).toHaveProperty("username");
          expect(user).toHaveProperty("name");
          expect(user).toHaveProperty("avatar_url");
          expect(typeof user.username).toBe("string");
          expect(typeof user.name).toBe("string");
          expect(typeof user.avatar_url).toBe("string");
        });
      });
  });
  test("404: Responds with error message for invalid endpoint", () => {
    return request(app)
      .get("/api/user")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ error: "endpoint not found" });
      });
  });
});

describe("GET /api/articles with sort query", () => {
  test("200: Responds with articles sorted by created_at in descending order by default", () => {
    const expectedResult = [
      {
        author: "icellusedkars",
        title: "Eight pug gifs that remind me of mitch",
        article_id: 3,
        topic: "mitch",
        created_at: "2020-11-03T09:12:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "2",
      },
      {
        author: "icellusedkars",
        title: "A",
        article_id: 6,
        topic: "mitch",
        created_at: "2020-10-18T01:00:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "1",
      },
      {
        author: "icellusedkars",
        title: "Sony Vaio; or, The Laptop",
        article_id: 2,
        topic: "mitch",
        created_at: "2020-10-16T05:03:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "butter_bridge",
        title: "Moustache",
        article_id: 12,
        topic: "mitch",
        created_at: "2020-10-11T11:24:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "butter_bridge",
        title: "Another article about Mitch",
        article_id: 13,
        topic: "mitch",
        created_at: "2020-10-11T11:24:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "rogersop",
        title: "UNCOVERED: catspiracy to bring down democracy",
        article_id: 5,
        topic: "cats",
        created_at: "2020-08-03T13:14:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "2",
      },
      {
        author: "butter_bridge",
        title: "Living in the shadow of a great man",
        article_id: 1,
        topic: "mitch",
        created_at: "2020-07-09T20:11:00.000Z",
        votes: 100,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "11",
      },
      {
        author: "butter_bridge",
        title: "They're not exactly dogs, are they?",
        article_id: 9,
        topic: "mitch",
        created_at: "2020-06-06T09:10:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "2",
      },
      {
        author: "rogersop",
        title: "Seven inspirational thought leaders from Manchester UK",
        article_id: 10,
        topic: "mitch",
        created_at: "2020-05-14T04:15:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "rogersop",
        title: "Student SUES Mitch!",
        article_id: 4,
        topic: "mitch",
        created_at: "2020-05-06T01:14:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "icellusedkars",
        title: "Does Mitch predate civilisation?",
        article_id: 8,
        topic: "mitch",
        created_at: "2020-04-17T01:08:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "icellusedkars",
        title: "Am I a cat?",
        article_id: 11,
        topic: "mitch",
        created_at: "2020-01-15T22:21:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
      {
        author: "icellusedkars",
        title: "Z",
        article_id: 7,
        topic: "mitch",
        created_at: "2020-01-07T14:08:00.000Z",
        votes: 0,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
        comment_count: "0",
      },
    ];
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(expectedResult);
      });
  });
  test("200: Responds with articles sorted in order according to query", () => {
    return request(app)
      .get("/api/articles?sort_by=title&order=ASC")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual([
          {
            author: "icellusedkars",
            title: "A",
            article_id: 6,
            topic: "mitch",
            created_at: "2020-10-18T01:00:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "1",
          },
          {
            author: "icellusedkars",
            title: "Am I a cat?",
            article_id: 11,
            topic: "mitch",
            created_at: "2020-01-15T22:21:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "butter_bridge",
            title: "Another article about Mitch",
            article_id: 13,
            topic: "mitch",
            created_at: "2020-10-11T11:24:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "icellusedkars",
            title: "Does Mitch predate civilisation?",
            article_id: 8,
            topic: "mitch",
            created_at: "2020-04-17T01:08:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "icellusedkars",
            title: "Eight pug gifs that remind me of mitch",
            article_id: 3,
            topic: "mitch",
            created_at: "2020-11-03T09:12:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "2",
          },
          {
            author: "butter_bridge",
            title: "Living in the shadow of a great man",
            article_id: 1,
            topic: "mitch",
            created_at: "2020-07-09T20:11:00.000Z",
            votes: 100,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "11",
          },
          {
            author: "butter_bridge",
            title: "Moustache",
            article_id: 12,
            topic: "mitch",
            created_at: "2020-10-11T11:24:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "rogersop",
            title: "Seven inspirational thought leaders from Manchester UK",
            article_id: 10,
            topic: "mitch",
            created_at: "2020-05-14T04:15:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "icellusedkars",
            title: "Sony Vaio; or, The Laptop",
            article_id: 2,
            topic: "mitch",
            created_at: "2020-10-16T05:03:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "rogersop",
            title: "Student SUES Mitch!",
            article_id: 4,
            topic: "mitch",
            created_at: "2020-05-06T01:14:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
          {
            author: "butter_bridge",
            title: "They're not exactly dogs, are they?",
            article_id: 9,
            topic: "mitch",
            created_at: "2020-06-06T09:10:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "2",
          },
          {
            author: "rogersop",
            title: "UNCOVERED: catspiracy to bring down democracy",
            article_id: 5,
            topic: "cats",
            created_at: "2020-08-03T13:14:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "2",
          },
          {
            author: "icellusedkars",
            title: "Z",
            article_id: 7,
            topic: "mitch",
            created_at: "2020-01-07T14:08:00.000Z",
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
            comment_count: "0",
          },
        ]);
      });
  });
  // remove above test and use jest-sort
  //add testing for an invalid query
});
// invailid article_id type - 400
