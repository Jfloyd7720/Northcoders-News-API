const {
  fetchTopicsData,
  fetchArticlesDataById,
  fetchArticleData,
  fetchCommentsData,
} = require("./models");
const endpoints = require("./endpoints.json");

const getTopicsData = (req, res) => {
  fetchTopicsData().then((data) => {
    return res.status(200).send(data);
  });
};
const getApiInfo = (req, res) => {
  return res.status(200).send({ endpoints });
};
const getArticlesByID = (req, res) => {
  const article = req.params;
  fetchArticlesDataById(article).then((data) => {
    //  req.parmams variable
    if (data) {
      return res.status(200).send({ data });
    } else {
      return res.status(404).send({ message: "article_id does not exist" });
    }
    // .catch()
  });
};
const getArticleData = (req, res) => {
  fetchArticleData().then((data) => {
    return res.status(200).send(data);
  });
};

const getCommentsDataByArticleID = (req, res) => {
  const article = req.url.split("/")[3];
  fetchCommentsData(article).then((data) => {
    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(404).send({ message: "article_id does not exist" });
    }
  });
};

module.exports = {
  getApiInfo,
  getTopicsData,
  getArticlesByID,
  getArticleData,
  getCommentsDataByArticleID,
};
