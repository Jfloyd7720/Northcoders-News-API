const express = require("express");
const app = express();
const endpoints = require("./endpoints.json");
const { getApiInfo, getTopicsData } = require("./controllers");

app.get("/api", getApiInfo);

app.get("/api/topics", getTopicsData);

app.all("*", (req, res) => {
  res.status(404).send({ error: "endpoint not fpund" });
});

module.exports = app;
