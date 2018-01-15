const cron = require('node-cron');
const axios = require('axios');
const db = require('../database/index.js');

let domain = 'http://localhost';
if (process.env.PORT) {
	domain = 'https://fant4syfootball.herokuapp.com'
}

let port = 4444;
if (process.env.PORT) {
	port = process.env.PORT
}

const addPlayerStats = () => {
	axios({
	  method:'get',
	  url: `${domain}:${port}/week`,
	})
	  .then(currentWeek => {
	  	let week = currentWeek.data.week;
	  	let season = currentWeek.data.season;
			axios({
		    method: 'post',
		    url: `${domain}:${port}/playerdata/${season}/${week}`,
		    headers: {"Content-Type": "application/json"},
		    data: JSON.stringify({})
			})
			.then(() => {
				console.log('player stats successfully created');
			})
			.catch(() => {
				console.log('failed to retrieve current week and then add player stats');
			});
		})
	.catch((err) => {
		console.log('failed to retrieve current week and then update player stats');
	})
};

const updatePlayerStats = () => {
	axios({
	  method:'get',
	  url: `${domain}:${port}/week`,
	})
	  .then(currentWeek => {
	  	let week = currentWeek.data.week;
	  	let season = currentWeek.data.season;
	  	console.log('week info: ', currentWeek.data)
			axios({
		    method: 'put',
		    url: `${domain}:${port}/playerdata/${season}/${week}`,
		    headers: {"Content-Type": "application/json"},
		    data: JSON.stringify({})
			})
			.then(() => {
				console.log('player stats successfully updated');
			})
			.catch(() => {
				console.log('player stats failed to update');
			});
		})
	.catch((err) => {
		console.log('failed to retrieve current week and then update player stats');
	})
};

const addNewPlayers = () => {
	axios({
    method: 'post',
    url: `${domain}:${port}/player`,
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify({})
		})
	  .then(() => {
	  	 console.log('yay')
		})
		.catch((err) => {
			console.log('err', err)
		})
};

const updateCurrentWeek = () => {
	axios({
	  method:'get',
	  url: `${domain}:${port}/week`,
	})
	  .then(currentWeek => {
	  	let week = currentWeek.data.week + 1;
	  	let season = currentWeek.data.season;
			axios({
		    method: 'put',
		    url: `${domain}:${port}/week`,
		    headers: {"Content-Type": "application/json"},
		    data: JSON.stringify({season: season, week: week})
			})
			.then(() => {
				console.log('successfully updated current week');
			})
			.catch(() => {
				console.log('failed to update week');
			});
		})
	.catch((err) => {
		console.log('failed to retrieve current week and then update current week');
	})
};

const getScores = (season, week) => {
	return axios.get(`${domain}:${port}/scores/${season}/${week}`);
};

const getMatchups = () => {
	return axios.get(`${domain}:${port}/matches`);
}

const processWinnersLossers = (scores, matchups) => {
	let winLossChart = {
		winners: [],
		losers: []
	};
  matchups.forEach((match) => {
		if (scores[match.user_id] < scores[match.rival_id]) {
			if (!winLossChart.winners.includes(match.user_id)) {
				winLossChart.winners.push(match.user_id)
			}
		} else {
			if (!winLossChart.losers.includes(match.user_id)) {
				winLossChart.losers.push(match.user_id)
			}
		}
	})
	return winLossChart;
}

const updateWinsLosses = () => {

	axios({
	  method:'get',
	  url: `${domain}:${port}/week`,
	})
	  .then(currentWeek => {
			axios.all([getScores(currentWeek.data.season, currentWeek.data.week), getMatchups()])
			  .then(axios.spread((scores, matchups) => {
			  	const winLossChart = processWinnersLossers(scores.data, matchups.data);
			  	winLossChart.winners.forEach((winner) => {
			  		db.updateWins(winner);
			  	});
			  	winLossChart.losers.forEach((loser) => {
			  		db.updateLosses(loser);
			  	});
			  }))
			  .catch((err) => {
					console.log('Error receiving scores ', err);
				});
		})
		.catch((err) => {
			console.log('Error receiving scores ', err);
		}); 		
};

const recurringStatInitialization = cron.schedule('5 * * * * *', () => {
	console.log('Cron adding new stats');
  addPlayerStats();
}, false);

const recurringStatUpdate = cron.schedule('2 * * * * *', () => {
	console.log('Cron updating stats');
  updatePlayerStats();
}, false);

const recurringPlayerUpdate = cron.schedule('8 * * * * *', () => {
	console.log('Cron adding new players');
  addNewPlayers();
}, false);

const recurringWeekUpdate = cron.schedule('15 * * * * *', () => {
	console.log('Cron changing week');
  updateCurrentWeek();
}, false);

const recurringUpdateWinsLosses = cron.schedule('15 * * * * *', () => {
	console.log('Cron updating Wins & Loses');
  updateWinsLosses();
}, false);

// initialize the Cron scheduled functions
// recurringStatInitialization.start();
// recurringStatUpdate.start();
// recurringPlayerUpdate.start();
// recurringWeekUpdate.start();
// recurringUpdateWinsLosses.start();
