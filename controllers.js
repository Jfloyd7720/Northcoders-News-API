const { fetchData, fetchArticlesDataById } = require("./models");
const endpoints = require("./endpoints.json");

const getTopicsData = (req, res) => {
  fetchData().then((data) => {
    return res.status(200).send(data);
  });
};
const getApiInfo = (req, res) => {
  return res.status(200).send({ endpoints });
};
const getArticlesByID = (req, res) => {
  fetchArticlesDataById(req.params).then((data) => {
    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(404).send({ message: "article_id does not exist" });
    }
  });
};

module.exports = { getApiInfo, getTopicsData, getArticlesByID };
