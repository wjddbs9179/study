var mysql = require('mysql');
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'book_db',
    port:3306
})

module.exports=db;