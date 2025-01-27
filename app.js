const express = require("express");
const app = express();
const endpoints = require("./endpoints.json");
const { getApiInfo, getTopicsData } = require("./controllers");

app.get("/api", getApiInfo);

app.get("/api/topics", getTopicsData);

module.exports = app;
