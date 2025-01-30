const db = require("./db/connection");
const format = require("pg-format");

const fetchTopicsData = () => {
  return db.query("SELECT * FROM topics").then((res) => {
    return res.rows;
  });
};

const fetchCommentsData = (article) => {
  return db
    .query(
      "SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at DESC",
      [article]
    )
    .then((res) => {
      if (res.rows.length > 0) return res.rows;
      //  promise.reject
      else {
        return null;
      }
    });
};

const insertCommentsData = (values) => {
  return db
    .query(
      "INSERT INTO comments(author,body,article_id) VALUES ($1, $2, $3) RETURNING *",
      values
    )

    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
};

const fetchArticleData = () => {
  return db
    .query(
      `SELECT 
  articles.author, 
  articles.title, 
  articles.article_id, 
  articles.topic, 
  articles.created_at, 
  articles.votes, 
  articles.article_img_url,
  COUNT(comments.article_id) AS comment_count 
FROM articles LEFT JOIN comments ON articles.article_id=comments.article_id
GROUP BY   articles.author, 
articles.title, 
articles.article_id, 
articles.topic, 
articles.created_at, 
articles.votes, 
articles.article_img_url
ORDER BY articles.created_at DESC`
    )
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    });
};

const fetchArticlesDataById = (article) => {
  const query = `SELECT * FROM articles WHERE article_id = $1 `;
  return db.query(query, [article.article_id]).then((res) => {
    if (res.rows.length > 0) return res.rows;
    //  promise.reject
    else {
      return null;
    }
  });
};

module.exports = {
  fetchTopicsData,
  fetchArticlesDataById,
  fetchArticleData,
  fetchCommentsData,
  insertCommentsData,
};
