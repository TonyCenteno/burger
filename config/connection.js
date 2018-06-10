// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burger_db"
// });


var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "iowgtaw9zq18ifyy",
    password: "smalh2r9e553e1cd",
    database: "burger_db"
  });
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;