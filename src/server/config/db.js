const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost:3307", 
user: "root", 
password: "", 
database: "blog_posts"
})

module.exports = db;