const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Sidhartha@2001",
database:"blog_posts" 
})

module.exports = db;