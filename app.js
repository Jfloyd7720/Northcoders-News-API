const express = require("express");
const app = express();
const { getApiInfo, getTopicsData, getArticlesByID } = require("./controllers");

app.get("/api", getApiInfo);

app.get("/api/topics", getTopicsData);

app.get("/api/articles/:article_id", getArticlesByID);

app.all("*", (req, res) => {
  res.status(404).send({ error: "endpoint not fpund" });
});

module.exports = app;
