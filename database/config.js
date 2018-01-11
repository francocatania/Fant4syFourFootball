const mysql = require('mysql');

const config = null;

if (!process.env.DATABASE_URL) {
    config = require('./developmentConfig.js');
}

const mysqlConfig = process.env.DATABASE_URL || config.developmentConfig;


module.exports.mysqlConfig = mysqlConfig;
