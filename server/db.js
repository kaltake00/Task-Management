const mysql = require('mysql');
const db = mysql.createPool({
    user: 'ba1ff9d6ae63bb',
    host: 'us-cdbr-east-05.cleardb.net',
    password: 'c7866c28',
    database: 'heroku_4cda83baf8728d0'
});

module.exports = db;