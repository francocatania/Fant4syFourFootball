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

// setInterval keeps database connection open. Hacky fix, investigate further when able.
setInterval(function () {
    db.query('SELECT 1');
}, 45000);

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
	const sql = sqlQueries.updatePlayerStats;
	const allStats = sqlQueries.allStats.map(stat => playerStats[stat])
	//we need week and id again so..
	const queryParams = allStats.push(playerStats.week);
	queryParams = queryParams.push(playerStats.playerID);

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

const getCurrentWeek =(res) => {
	const sql = sqlQueries.currentWeekAndSeason;

	db.query(sql, (err, data) => {
		if (err) {
			console.log('Player failed to insert into database');
		} else {
			console.log('got data', data)
			let currentWeek = {
				season: data[0].currentseason,
				week: data[0].currentweek
			}
			console.log('currentweek', currentWeek)
			res.status(200);
			res.send(currentWeek);
		}
	});
};


const updateCurrentWeek =(week, res) => {
	const sql = sqlQueries.updateCurrentWeek;
	console.log('in database', week)

	db.query(sql, [week], (err, data) => {
		if (err) {
			console.log('Week failed to update into database');
		} else {
			console.log('Week successfully updated into database');
		}
		res.sendStatus(200);
	});
};

const saveUser = (username, password, userId) => {
  const sql = sqlQueries.saveUserInfo;

  db.query(sql, [username, week], (err, data) => {
		if (err) {
			console.log('Failed to save user in database');
		} else {
			console.log('User successfully saved in database');
		}
	});
};

const checkPassword = (username) => {
  const sql = sqlQueries.findPassword;

  return db.query(sql, username, (err, password) => {
		if (err) {
			console.log('Failed to find password in database');
		} else {
			console.log('Password successfully found in database');
		}
	})
};

const getTeambyUser = (userId) => {
  const sql = sqlQueries.getTeamName;
  return db.query(sql, userId, (err, data) => {
		if (err) {
			console.log('Failed to find team name in database');
		} else {
			console.log('Team successfully found in database');
		}
	});
};

const getRivalTeam = (userId) => {
  const sql = sqlQueries.getRivalInfo;

  return db.query(sql, userId, (err, data) => {
		if (err) {
			console.log('Failed to find rival team name in database');
		} else {
			console.log('Rival team successfully found in database');
		}
	});
};

const getTeam = (user) => {
  return {
    teamName: getTeamName(user),
    players: playersInTeam(user, week)
  }
}

module.exports = {
  savePlayerStatsToDB,
  updatePlayerStatsInDB,
  savePlayerToDB,
  getAllPlayersByTeam,
  getCurrentWeek,
  updateCurrentWeek,
  saveUser,
  checkPassword,
  getTeambyUser,
  getTeam
}
