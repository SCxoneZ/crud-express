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

app.use("view engine", "ejs");

conn.connect((err) => {
  
  if (err) throw err;
  
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  app.listen(PORT, () => console.log(`Listening To Port ${PORT}...`));
  
});