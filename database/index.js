const mysql = require('mysql');
const sqlQueries = require('./mysqlQueries.js');
const {mysqlConfig} = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect(function(err) {
   if (err) {
   	console.log('error connecting to sql database', err);
   }
   console.log("Connected in database file!");
 });

const db = connection;


// HELPER FUNCTIONS //

const savePlayerStatsToDB = (playerStats, res) => {
	const sql = sqlQueries.savePlayerStats
	const allStats = sqlQueries.allStats.map(stat => playerStats[stat])
	
	db.query(sql, allStats, (err, data) => {
		if (err) {
			console.log('Stats failed to insert into database');
		} else {
			console.log('Stats successfully inserted into database');
		}
	});
};

const updatePlayerStatsInDB = (playerStats) => {
	const sql = ``;

	db.query(sql, sqlQueries.allStats, (err, data) => {
		if (err) {
			console.log('Player failed to insert into database');
		} else {
			console.log('Player successfully inserted into database');
		}
	});
}

const savePlayerToDB = (player) => {
	const sql = sqlQueries.savePlayer;

	db.query(sql, [player.id, player.name, player.position], (err, data) => {
		if (err) {
			console.log('Player failed to insert into database');
		} else {
			console.log('Player successfully inserted into database');
		}
	});
}

const getAllPlayersByTeam = (username, week) => {};

const getCurrentWeek =() => {};

const updateCurrentWeek =() => {};


module.exports.savePlayerStatsToDB = savePlayerStatsToDB;
module.exports.updatePlayerStatsInDB = updatePlayerStatsInDB;
module.exports.savePlayerToDB = savePlayerToDB;
module.exports.getAllPlayersByTeam = getAllPlayersByTeam;
module.exports.getCurrentWeek = getCurrentWeek;
module.exports.updateCurrentWeek = updateCurrentWeek;