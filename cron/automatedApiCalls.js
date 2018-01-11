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
			    uri: `/playerdata`,
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
				    uri: '/playerdata',
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

const updatePlayers = () => {
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
				    method: 'POST',
				    uri: '/playerdata',
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
  updatePlayers();
}, true);

const recurringWeekUpdate = cron.schedule('* * * * *', () => {
  updateCurrentWeek();
}, true);
