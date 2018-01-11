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

	// function to save platerStats to clearDB
	db.query(sql, () => {
		if (err) {
			console.log('Stats failed to insert into database');
		} else {
			console.log('Stats successfully inserted into database');
		}
	});
};

const savePlayerToDB = (player) => {
	const sql = sqlQueries.savePlayer;

	// function to save player to clearDB
	db.query(sql, () => {
		if (err) {
			console.log('Player failed to insert into database');
		} else {
			console.log('Player successfully inserted into database');
		}
	});
}



module.exports.savePlayerStatsToDB = savePlayerStatsToDB;
module.exports.savePlayerToDB = savePlayerToDB;