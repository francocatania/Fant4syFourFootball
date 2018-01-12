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
		}
	});
};

const getCurrentWeek =() => {};

const updateCurrentWeek =() => {};

const saveUser = (username, password, userId) => {
  const sql = sqlQueries.playersInTeam;

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

  db.query(sql, username, (err, data) => {
		if (err) {
			console.log('Failed to find password in database');
		} else {
			console.log('Password successfully found in database');
		}
	});
};

const getTeambyUser = (userId) => {
  const sql = sqlQueries.getTeamName;

  db.query(sql, userId, (err, data) => {
		if (err) {
			console.log('Failed to find team name in database');
		} else {
			console.log('Team successfully found in database');
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
