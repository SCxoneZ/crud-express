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

app.set("view engine", "ejs");

conn.connect((err) => {
  
  if (err) throw err;
  
  app.get("/", (req, res) => {
    conn.query("SELECT * FROM list", (err, results) => {
      res.render("home", {title: "CRUD USING EXPRESS JS AND MYSQL", data: results});
    })
  });
  
  app.listen(PORT, () => console.log(`Listening To Port ${PORT}...`));
  
});