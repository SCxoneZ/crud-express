const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo"
});

function getTodo(){
  conn.connect(err => {
    if(err) throw err;
  });
  
  return conn.query("SELECT * FROM list", (err, results) => {
    if(err) throw err;
    return results;
  });
  
}

module.exports = { getTodo };