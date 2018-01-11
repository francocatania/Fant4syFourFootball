const mysql = require('mysql');

if (!process.env.DATABASE_URL) {
    const {config} = require('./developmentConfig.js');
}

const mysqlConfig = process.env.DATABASE_URL || config;


module.exports.mysqlConfig = mysqlConfig;



  