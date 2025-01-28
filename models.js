const db = require("./db/connection");

const fetchTopicsData = () => {
  return db.query("SELECT * FROM topics").then((res) => {
    return res.rows;
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

const fetchArticlesDataById = (param) => {
  const query = `SELECT * FROM articles WHERE article_id = $1 `;
  return db.query(query, [param.article_id]).then((res) => {
    if (res.rows.length > 0) return res.rows;
    else {
      return null;
    }
  });
};

module.exports = {
  fetchTopicsData,
  fetchArticlesDataById,
  fetchArticleData,
};
