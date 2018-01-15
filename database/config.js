const mysql = require('mysql');
let config = null;

console.log(process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
    config = require('./developmentConfig.js');
}

const mysqlConfig = process.env.DATABASE_URL || config.developmentConfig;

module.exports.mysqlConfig = mysqlConfig;
