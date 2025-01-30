const express = require("express");
const app = express();
const {
  getApiInfo,
  getTopicsData,
  getArticlesByID,
  getArticleData,
  getCommentsDataByArticleID,
} = require("./controllers");

app.get("/api", getApiInfo);

app.get("/api/topics", getTopicsData);

app.get("/api/articles", getArticleData);

app.get("/api/articles/:article_id", getArticlesByID);

app.get("/api/articles/:article_id/comments", getCommentsDataByArticleID);

app.all("*", (req, res) => {
  res.status(404).send({ error: "endpoint not fpund" });
});

module.exports = app;
