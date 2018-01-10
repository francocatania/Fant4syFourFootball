const apiSimulation = require('apiSimulation/week14Data.js');
const apiKeys = require('apiKeys.js')
const db = require('../database/index.js');

const getDataFromApiSimulation(res) => {
	const parsedJSONData = apiSimulation.playerWeeklyStats;

	const processedPlayersStats = parsedJSONData.map((playerStats) => {
		return makePlayerStats(playerStats)
	});

	processedPlayersStats.forEach((playerStats) => {
		db.savePlayerStatsToDB(playerStats);
	})

	res.sendStatus(201);
};

// scoreId ("id") is automatically incremeneted, and is unique. Not included here.
const makePlayerStats = (data) => {
	return playStats = {
		"Week": data.Week,
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
		"twoPointConversionPasses": data.TwoPointConversionPasses,
		"twoPointConversionRuns": data.TwoPointConversionRuns,
		"twoPointConversionReceptions": data.TwoPointConversionReceptions,
  	"isGameOver": data.IsGameOver
	}
};

const makePlayer = (data) => {
		"id": data.PlayerID,
		"name": data.Name,
		"position": data.Position
};


// const getAllPlayerStatsFromApi(res, season, week) => {
// 	const options = {
// 	    uri: `https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/${season}/${week}/?`,
// 	    headers: {
// 	        'User-Agent': 'Request-Promise',
// 	        'Ocp-Apim-Subscription-Key': apiKeys.fdsSubscriptionKey
// 	    },
// 	    json: true 
// 	};

// 	rp(options)
// 	    .then((parsedJSONData) => {
// 	      const processedPlayersStats = parsedJSONData.map((playerStats) => {
// 					return makePlayerStats(playerStats)
// 				});

// 				processedPlayersStats.forEach((playerStats) => {
// 					db.savePlayerStatsToDB(playerStats);
// 				});
// 	    })
// 	    .catch((err) => {
// 	      console.log('failed to retrieve data from Fantasy Data Solutions');
// 	    });

// 	res.sendStatus(201);
// };

// const getPlayerStatsByPlayerIdFromApi(res, season, week, playerId) => {
// 	const options = {
// 	    uri: `https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByPlayerID/${season}/${week}/${playerId}?`,
// 	    headers: {
// 	        'User-Agent': 'Request-Promise',
// 	        'Ocp-Apim-Subscription-Key': apiKeys.fdsSubscriptionKey
// 	    },
// 	    json: true 
// 	};

// 	rp(options)
// 	    .then((parsedJSONData) => {
// 	      const processedPlayersStats = parsedJSONData.map((playerStats) => {
// 					return makePlayerStats(playerStats)
// 				});

// 				processedPlayersStats.forEach((playerStats) => {
// 					db.savePlayerStatsToDB(playerStats);
// 				});
// 	    })
// 	    .catch((err) => {
// 	      console.log('failed to retrieve data from Fantasy Data Solutions');
// 	    });

// 	res.sendStatus(201);
// };


module.exports.getDataFromApiSimulation = getDataFromApiSimulation;
// module.exports.getAllPlayerStatsFromApi = getAllPlayerStatsFromApi;
// module.exports.getPlayerStatsByPlayerIdFromApi = getPlayerStatsByPlayerIdFromApi;
