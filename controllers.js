const { fetchData } = require("./models");
const endpoints = require("./endpoints.json");

const getTopicsData = (req, res) => {
  fetchData().then((data) => {
    return res.status(200).send(data);
  });
};
const getApiInfo = (req, res) => {
  return res.status(200).send({ endpoints });
};

module.exports = { getApiInfo, getTopicsData };
