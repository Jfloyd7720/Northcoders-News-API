const db = require("./db/connection");

const fetchData = () => {
  return db.query("SELECT * FROM topics").then((res) => {
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
module.exports = { fetchData, fetchArticlesDataById };
