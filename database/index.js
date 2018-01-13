const mysql = require('mysql');
const sqlQueries = require('./mysqlQueries.js');
const {mysqlConfig} = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
   if (err) {
   	console.log('error connecting to sql database', err);
   }
   console.log("Connected in database file!");
 });

const db = connection;

// setInterval keeps database connection open. Hacky fix, investigate further when able.  
setInterval(() => {
    db.query('SELECT 1');
}, 45000);

// HELPER FUNCTIONS //

const savePlayerStatsToDB = (playerStats, res) => {
	const sql = sqlQueries.savePlayerStats
	const allStats = sqlQueries.allStats.map(stat => playerStats[stat])
	
	db.query(sql, allStats, (err, data) => {
		if (err) {
			console.log('Stats failed to insert into database');
			res.sendStatus(400);
		} else {
			console.log('Stats successfully inserted into database');
		}
	});
	res.sendStatus(201);
};

const updatePlayerStatsInDB = (playerStats, res) => {
	const sql = sqlQueries.updatePlayerStats;
	const allStats = sqlQueries.allStats.map(stat => playerStats[stat])

	let queryParams = allStats.slice();
	queryParams.push(playerStats.week);
	queryParams.push(playerStats.playerID);

	db.query(sql, queryParams, (err, data) => {
		if (err) {
			console.log('Failed to Update PlayerStats');
		} else {
			console.log('Successfully Updated PlayerStats');
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

const getAllPlayersByTeam = (username, week) => {
	const sql = sqlQueries.playersInTeam;

	db.query(sql, [username, week], (err, data) => {
		if (err) {
			console.log('Couldn\'t get all players by team' );
		} else {
			console.log('Successfully got all player in the team');
			res.send(data);
		}
	});
};

const getCurrentWeek = (res) => {
	const sql = sqlQueries.currentWeekAndSeason;

	db.query(sql, (err, data) => {
		if (err) {
			console.log('Player failed to insert into database');
		} else {
			console.log('got current week: ', data)
			res.sendStatus(404);
			let currentWeek = {
				season: data[0].currentseason,
				week: data[0].currentweek
			}
			res.status(200);
			res.send(currentWeek);
		}
	});
};

const updateCurrentWeek = (week, res) => {
	const sql = sqlQueries.updateCurrentWeek;

	db.query(sql, [week], (err, data) => {
		if (err) {
			console.log('Week failed to update into database');
			res.sendStatus(400);
		} else {
			console.log('Week successfully updated into database');
		}
		res.sendStatus(200);
	});
};

const getMatchScore = (teamId, res) => {
	const sql = ``;

	db.query(sql, [teamId], (err, data) => {
		if (err) {
			console.log('Match score not found');
			res.sendStatus(404);
		} else {
			res.send(data);
		}
	});
	res.send(data);
};

const updateLosses = (teamId, res) => {
	const sql = sqlQueries.updateLosses;

	db.query(sql, [teamId], (err, data) => {
		if (err) {
			console.log('Losses failed to update into database');
			res.sendStatus(404);
		} else {
			console.log('Losses successfully updated into database');
			res.sendStatus(200);
		}
	});
};

const updateWins = (teamId, res) => {
	const sql = sqlQueries.updateWins;

	db.query(sql, [teamId], (err, data) => {
		if (err) {
			console.log('Wins failed to update into database');
			res.sendStatus(400);
		} else {
			console.log('Wins successfully updated into database');
			res.sendStatus(200);
		}
	});
};

module.exports.savePlayerStatsToDB = savePlayerStatsToDB;
module.exports.updatePlayerStatsInDB = updatePlayerStatsInDB;
module.exports.savePlayerToDB = savePlayerToDB;
module.exports.getAllPlayersByTeam = getAllPlayersByTeam;
module.exports.getCurrentWeek = getCurrentWeek;
module.exports.updateCurrentWeek = updateCurrentWeek;
module.exports.getMatchScore = getMatchScore;
module.exports.updateWins = updateWins;
module.exports.updateLosses = updateLosses;