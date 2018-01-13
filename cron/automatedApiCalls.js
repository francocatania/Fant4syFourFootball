const cron = require('node-cron');
const axios = require('axios');

const addPlayerStats = () => {
	axios({
	  method:'get',
	  url: 'http://localhost:4444/week',
	})
	  .then(currentWeek => {
	  	let week = currentWeek.data.week;
	  	let season = currentWeek.data.season;
			axios({
		    method: 'post',
		    url: `http://localhost:4444/playerdata/${season}/${week}`,
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
}

const updatePlayerStats = () => {
	axios({
	  method:'get',
	  url: 'http://localhost:4444/week',
	})
	  .then(currentWeek => {
	  	let week = currentWeek.data.week;
	  	let season = currentWeek.data.season;
	  	console.log('week info: ', currentWeek.data)
			axios({
		    method: 'put',
		    url: `http://localhost:4444/playerdata/${season}/${week}`,
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
}

const addNewPlayers = () => {
	axios({
    method: 'post',
    url: 'http://localhost:4444/player',
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify({})
		})
	  .then(() => {
	  	 console.log('yay')
		})
		.catch((err) => {
			console.log('err', err)
		})
}

const updateCurrentWeek = () => {
	axios({
	  method:'get',
	  url: 'http://localhost:4444/week',
	})
	  .then(currentWeek => {
	  	let week = currentWeek.data.week + 1;
	  	let season = currentWeek.data.season;
			axios({
		    method: 'put',
		    url: 'http://localhost:4444/week',
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
}

const updateWinsLosses = () => {
	axios({
	  method:'get',
	  url: `http://localhost:4444/scores`,
	})
	  .then(scores => {
	  	let score1 = null;
	  	let score2 = null
			axios({
		    method: 'put',
		    url: `http://localhost:4444/teams/${id}/${result}`,
		    headers: {"Content-Type": "application/json"},
		    data: JSON.stringify({season: season, week: week})
			})
			.then(() => {
				console.log('wins & losses updated');
			})
			.catch(() => {
				console.log('wins & losses failed to update');
			});
		})
	.catch((err) => {
		console.log('err', err);
	})
}

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

const recurringUpdateWinsLosses = crons.schedule('15 * * * * *', () => {
	console.log('Cron updating Wins & Loses');
  updateWinsLosses();
}, false);

// recurringStatInitialization.start();
// recurringStatUpdate.start();
// recurringPlayerUpdate.start();
// recurringWeekUpdate.start();
// recurringUpdateWinsLosses.start();
