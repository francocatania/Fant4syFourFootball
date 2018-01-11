const mysql = require('mysql');
const sqlQueries = require('./mysqlQueries.js');
const {mysqlConfig} = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });

const db = mysql.connection;


// HELPER FUNCTIONS //

const savePlayerStatsToDB = (playerStats) => {
	const sql = sqlQueries.savePlayerStats
	
	db.query(sql, sqlQueries.allStats, () => {
		if (err) {
			console.log('Stats failed to insert into database');
		} else {
			console.log('Stats successfully inserted into database');
		}
	});
};

const savePlayerToDB = (player) => {
	const sql = sqlQueries.savePlayer;

	db.query(sql, [player.id, player.name, player.position], () => {
		if (err) {
			console.log('Player failed to insert into database');
		} else {
			console.log('Player successfully inserted into database');
		}
	});
}

const getAllPlayersByTeam = (username, week) => {};


module.exports.savePlayerStatsToDB = savePlayerStatsToDB;
module.exports.savePlayerToDB = savePlayerToDB;