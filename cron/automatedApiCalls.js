const cron = require('node-cron');
const request = require('request');
const rp = require('request-promise');


const getPlayerStats = () => {

	const getOptions = {
    uri: '/week',
    json: true
	};

	rp(getOptions)
    .then(currentWeek => {
  		const postOptions = {
			    method: 'POST',
			    uri: `/playerdata/${currentWeek.season}/${currentWeek.week}`,
			    body: {},
			    json: true 
			};

	    rp(postOptions)
		    .then(parsedBody => {
		        
		    })
		    .catch(err => {
		        
		    });
    })
    .catch(err => {
        
    });
};

const updatePlayerStats = () => {
	const getOptions = {
    uri: '/week',
    json: true
	};

	rp(getOptions)
	    .then(currentWeek => {
    		const postOptions = {
				    method: 'POST',
				    uri: `/playerdata/${currentWeek.season}/${currentWeek.week}`,
				    body: {},
				    json: true 
				};

		    rp(postOptions)
			    .then(parsedBody => {
			        
			    })
			    .catch(err => {
			        
			    });
	    })
	    .catch(err => {
	        
	    });
};

const addNewPlayers = () => {
	const options = {
	    method: 'POST',
	    uri: '/player',
	    body: {},
	    json: true 
	};

	rp(options)
	    .then(parsedBody => {
	        
	    })
	    .catch(err => {
	        
	    });
};

const updateCurrentWeek = () => {
	const getOptions = {
    uri: '/week',
    json: true
	};

	rp(getOptions)
	    .then(currentWeek => {
    		const postOptions = {
				    method: 'PUT',
				    uri: '/week',
				    body: {},
				    json: true 
				};

		    rp(postOptions)
			    .then(parsedBody => {
			        
			    })
			    .catch(err => {
			        
			    });
	    })
	    .catch(err => {
	        
	    });
  };

const recurringStatCollection = cron.schedule('* * * * *', () => {
  getPlayerStats();
}, true);

const recurringStatUpdate = cron.schedule('* * * * *', () => {
  updatePlayerStats();
}, true);

const recurringPlayerUpdate = cron.schedule('* * * * *', () => {
  addNewPlayers();
}, true);

const recurringWeekUpdate = cron.schedule('* * * * *', () => {
  updateCurrentWeek();
}, true);
