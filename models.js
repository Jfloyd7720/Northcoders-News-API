const db = require("./db/connection");

const fetchData = () => {
  return db.query("SELECT * FROM topics").then((res) => {
    return res.rows;
  });
};

module.exports = { fetchData };
