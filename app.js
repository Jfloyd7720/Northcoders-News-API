const express = require("express");
const app = express();
const cors = require("cors");
const {
  getApiInfo,
  getTopicsData,
  getArticlesByID,
  getArticleData,
  getCommentsDataByArticleID,
  postCommentsDataByArticleID,
  patchArticleByArticleID,
  deleteCommentsByCommentID,
  getUsers,
} = require("./controllers");

app.use(cors());
app.use(express.json());

app.get("/api", getApiInfo);

app.get("/api/topics", getTopicsData);

app.get("/api/articles", getArticleData);

app.get("/api/articles/:article_id", getArticlesByID);

app.get("/api/articles/:article_id/comments", getCommentsDataByArticleID);

app.post("/api/articles/:article_id/comments", postCommentsDataByArticleID);

app.patch("/api/articles/:article_id", patchArticleByArticleID);

app.delete("/api/comments/:comment_id", deleteCommentsByCommentID);

app.get("/api/users", getUsers);

app.all("*", (req, res) => {
  res.status(404).send({ error: "endpoint not found" });
});

module.exports = app;
