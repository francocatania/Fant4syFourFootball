const mysql = require('mysql');

if(process.env.DATABASE_URL) {
    const mysqlConfig = {
        host: 'us-cdbr-iron-east-05.cleardb.net',
        user: 'b961346bed77e2',
        password: '907d03a3',
        database: 'heroku_4c6e8fadd8d442b'
        };
} else {
    const mysqlConfig = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fant4syFootball'
      };
 }

module.exports.mysqlConfig = mysqlConfig;
  