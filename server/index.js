const bodyParser = require('body-parser');
const path = require('path');

const fdsApi = require('../api/fantasyDataSolutions.js');

const serverHelpers = require('./serverHelpers.js');

const express = require('express');
const https = require('https');
const port = process.env.PORT || 4444;
const app = express();
https.createServer(app);



app
	.use(bodyParser.json())
	.use(express.static(path.join(__dirname, '../client/dist')))
	.post('/playerdata', (req, res) => fdsApi.getAllPlayerStatsFromApi(res))
	.put('/playerdata', (req, res) => fdsApi.updateAllPlayerStatsFromApi(res)))
	.listen(port, '0.0.0.0', () => console.log(`express listening on port ${port}`));
