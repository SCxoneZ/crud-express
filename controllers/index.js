const {conn} = require("../app");

const handler = (req, res) => {
  conn.query("SELECT * FROM list", (err, results) => {
    res.render("home", {
      title: "CRUD USING EXPRESS JS AND MYSQL", data: results
    });
  });
};

module.exports = handler;