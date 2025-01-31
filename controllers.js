const {
  fetchTopicsData,
  fetchArticlesDataById,
  fetchArticleData,
  fetchCommentsData,
  insertCommentsData,
  updateArticleByArticleID,
  removeCommentById,
  fetchUsers,
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
const patchArticleByArticleID = (req, res) => {
  const inc_votes = req.body.inc_votes;
  const article_id = req.params.article_id;

  updateArticleByArticleID(inc_votes, article_id).then((data) => {
    if (data.length < 1) {
      return res.status(404).send({ message: "article_id does not exist" });
    } else {
      return res.status(200).send(data);
    }
  });
};
const deleteCommentsByCommentID = (req, res) => {
  const id = req.params.comment_id;
  removeCommentById(id).then((data) => {
    if (data.rowCount < 1) {
      return res.status(404).send({ message: "comment_id does not exist" });
    } else if (data.code == "22P02") {
      return res
        .status(404)
        .send({ message: "invalid data type for comment_id" });
    } else {
      return res.status(204).send();
    }
  });
};
const getUsers = (req, res) => {
  fetchUsers().then((data) => {
    return res.status(200).send(data.rows);
  });
};

module.exports = {
  getApiInfo,
  getTopicsData,
  getArticlesByID,
  getArticleData,
  getCommentsDataByArticleID,
  postCommentsDataByArticleID,
  patchArticleByArticleID,
  deleteCommentsByCommentID,
  getUsers,
};
