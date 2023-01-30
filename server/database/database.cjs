const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '3103',
    database: 'faculty_database',
    multipleStatements: 'true'
});

module.exports = db;