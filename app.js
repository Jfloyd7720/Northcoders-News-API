const express = require("express");
const app = express();
const {
  getApiInfo,
  getTopicsData,
  getArticlesByID,
  getArticleData,
  getCommentsDataByArticleID,
  postCommentsDataByArticleID,
  patchArticleByArticleID,
  deleteCommentsByCommentID,
} = require("./controllers");

app.use(express.json());

app.get("/api", getApiInfo);

app.get("/api/topics", getTopicsData);

app.get("/api/articles", getArticleData);

app.get("/api/articles/:article_id", getArticlesByID);

app.get("/api/articles/:article_id/comments", getCommentsDataByArticleID);

app.post("/api/articles/:article_id/comments", postCommentsDataByArticleID);

app.patch("/api/articles/:article_id", patchArticleByArticleID);

app.delete("/api/comments/:comment_id", deleteCommentsByCommentID);

app.all("*", (req, res) => {
  res.status(404).send({ error: "endpoint not fpund" });
});

module.exports = app;
