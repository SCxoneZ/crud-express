const express = require("express");
const mysql = require("mysql");

const app = express();
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo"
});
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

conn.connect((err) => {

  if (err) throw err;

  app.get("/", (req, res) => {
    /*res.cookie('access_token', "test", {
      expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
    });*/
    conn.query("SELECT * FROM list", (err, results) => {
      res.render("home", {
        title: "CRUD USING EXPRESS JS AND MYSQL",
        data: results
      });
    });
  });

  // delete todo
  app.post("/delete", (req, res) => {
    conn.query(`DELETE FROM list WHERE id = '${req.body.id}'`, (err, results) => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  // add todo
  app.post("/add", (req,
    res) => {
    conn.query(`INSERT INTO list (id, activity) VALUES(0, '${req.body.todo}')`,
      (err, results) => {
        if (err) throw err;
        res.redirect("/");
      });
  });

  app.listen(PORT, () => console.log(`Listening To Port ${PORT}...`));

});