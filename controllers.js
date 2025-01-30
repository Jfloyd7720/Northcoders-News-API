const {
  fetchTopicsData,
  fetchArticlesDataById,
  fetchArticleData,
  fetchCommentsData,
  insertCommentsData,
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
const postCommentsDataByArticleID = (req, res) => {
  const values = [];
  for (let key in req.body) {
    values.push(req.body[key]);
  }
  const article = Number(req.url.split("/")[3]);
  values.push(article);
  insertCommentsData(values).then((data) => {
    if (data.code == "23503") {
      return res.status(400).send({ message: "article_id does not exist" });
    } else {
      return res.status(200).send(data);
    }
  });
};

module.exports = {
  getApiInfo,
  getTopicsData,
  getArticlesByID,
  getArticleData,
  getCommentsDataByArticleID,
  postCommentsDataByArticleID,
};
