const axios = require('axios');
const apiSimulation14 = require('./apiSimulation/week14SelectedPlayers.js');
const apiSimulation15 = require('./apiSimulation/week15SelectedPlayers.js');
const apiSimulationPlayer = require('./apiSimulation/onePlayerData.js');
const db = require('../database/index.js');

let apiKeys = null
if (!process.env.fdsKey) {
	apiKeys = require('./apiKeys.js');
}

const makePlayer = (data) => {
	return player = {
		"id": data.PlayerID,
		"name": data.Name,
		"position": data.Position
	}
};

const makePlayerStats = (data) => {
	data.IsGameOver ? data.IsGameOver = 1 : data.IsGameOver = 0;
	console.log(data.IsGameOver);

	return playStats = {
		"week": data.Week,
		"playerID": data.PlayerID,
		"passingYards": data.PassingYards,
		"passingTouchdowns": data.PassingTouchdowns,
		"passingInterceptions": data.PassingInterceptions,
		"rushingYards": data.RushingYards,
		"rushingTouchdowns": data.RushingTouchdowns,
		"receptions": data.Receptions,
		"receivingYards": data.ReceivingYards,
		"receivingTouchdowns": data.RushingTouchdowns,
		"fumbles": data.Fumbles,
		"fieldGoalsMade0to19": data.FieldGoalsMade0to19,
	  "fieldGoalsMade20to29": data.FieldGoalsMade20to29,
	  "fieldGoalsMade30to39": data.FieldGoalsMade30to39,
	  "fieldGoalsMade40to49": data.FieldGoalsMade40to49,
	  "fieldGoalsMade50Plus": data.FieldGoalsMade50Plus,
		"extraPointsMade": data.ExtraPointsMade,
  	"isGameOver": data.IsGameOver
	}
};

// this function is a simulation of the real API call, which is commented out below
// comment out this function, and uncomment the below function to open up API functionality
const getNewPlayersFromApi = (res) => {
	const parsedJSONData = apiSimulation14.playerWeeklyStats;
	const processedPlayers = parsedJSONData.map(player => {
		return makePlayer(player)
	});

	processedPlayers.forEach(player => {
		db.savePlayerToDB(player);
	});

	res.sendStatus(201);
};

// this function is a simulation of the real API call, which is commented out below
// comment out this function, and uncomment the below function to open up API functionality
const getAllPlayerStatsFromApi = (season, week, res) => {
	let parsedJSONData = [];
	if (week == 14) {
		parsedJSONData = apiSimulation14.playerWeeklyStats;
	} else if (week == 15) {
		parsedJSONData = apiSimulation15.playerWeeklyStats;
	}
	const processedPlayersStats = parsedJSONData.map(playerStats => {
		return makePlayerStats(playerStats)
	});

	processedPlayersStats.forEach(playerStats => {
		db.savePlayerStatsToDB(playerStats);
	})

	res.sendStatus(201);
};

// this function is a simulation of the real API call, which is commented out below
// comment out this function, and uncomment the below function to open up API functionality
const updateAllPlayerStatsFromApi = (season, week, res) => {
	let parsedJSONData = [];
	if (week == 14) {
		parsedJSONData = apiSimulation14.playerWeeklyStats;
	} else if (week == 15) {
		parsedJSONData = apiSimulation15.playerWeeklyStats;
	}
	
	const processedPlayersStats = parsedJSONData.map(playerStats => {
		return makePlayerStats(playerStats)
	});

	processedPlayersStats.forEach(playerStats => {
		db.updatePlayerStatsInDB(playerStats);
	})

	res.sendStatus(201);
};

// const getNewPlayersFromApi = (res) => {
// 	axios({
// 	  method:'get',
// 	  url: 'https://api.fantasydata.net/v3/nfl/stats/JSON/Players',
// 	  headers: {
//       'Ocp-Apim-Subscription-Key': process.env.fdsKey || apiKeys.fdsSubscriptionKey
//     },
//     json: true
// 	})
//   .then((parsedJSONData) => {
// 		const processedPlayers = parsedJSONData.map(player => {
// 			return makePlayer(player)
// 		});

// 		processedPlayers.forEach(player => {
// 			db.savePlayerToDB(player);
// 		});

// 		res.sendStatus(201);
// 	})
// 	.catch((err) => {
//     console.log('failed to retrieve data from Fantasy Data Solutions');
//     res.sendStatus(400);
// 	})
// }

// const getAllPlayerStatsFromApi = (res, season, week) => {
// 	axios({
// 	  method:'get',
// 	  url: `https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/${season}/${week}/?`,
// 	  headers: {
//       'Ocp-Apim-Subscription-Key': process.env.fdsKey || apiKeys.fdsSubscriptionKey
//     },
//     json: true
// 	})
//   .then((parsedJSONData) => {
//     const processedPlayersStats = parsedJSONData.map(playerStats => {
// 			return makePlayerStats(playerStats)
// 		});

// 		processedPlayersStats.forEach(playerStats => {
// 			db.savePlayerStatsToDB(playerStats);
// 		});

// 		res.sendStatus(201);
//   })
//   .catch((err) => {
//     console.log('failed to retrieve data from Fantasy Data Solutions');
//     res.sendStatus(400);
//   });
// }

// const updateAllPlayerStatsFromApi = (res, season, week) => {
// 	axios({
// 	  method:'get',
// 	  url: `https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/${season}/${week}/?`,
// 	  headers: {
//       'Ocp-Apim-Subscription-Key': process.env.fdsKey || apiKeys.fdsSubscriptionKey
//     },
//     json: true
// 	})
//   .then((parsedJSONData) => {
//     const processedPlayersStats = parsedJSONData.map(playerStats => {
// 			return makePlayerStats(playerStats)
// 		});

// 	processedPlayersStats.forEach(playerStats => {
// 		db.updatePlayerStatsInDB(playerStats);
// 	})

// 		res.sendStatus(201);
//   })
//   .catch((err) => {
//     console.log('failed to retrieve data from Fantasy Data Solutions');
//     res.sendStatus(400);
//   });
// }


module.exports.getNewPlayersFromApi = getNewPlayersFromApi;
module.exports.getAllPlayerStatsFromApi = getAllPlayerStatsFromApi;
module.exports.updateAllPlayerStatsFromApi = updateAllPlayerStatsFromApi;
