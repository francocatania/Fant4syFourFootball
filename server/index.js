const bodyParser = require('body-parser');
const path = require('path');

const fdsApi = require('../api/fantasyDataSolutions.js');
const db = require('../database/index.js');
const cron = require('../cron/automatedApiCalls.js');

const serverHelpers = require('./serverHelpers.js');
const express = require('express');
const https = require('https');
const port = process.env.PORT || 4444;
const app = express();
https.createServer(app);

app
	.use(bodyParser.json())
	.use(express.static(path.join(__dirname, '../client/dist')))
	.get('/week', (req, res) => db.getCurrentWeek(res))
	.post('/player', (req, res) => fdsApi.getNewPlayersFromApi(res))
	.post('/playerdata/:season/:week', (req, res) => fdsApi.getAllPlayerStatsFromApi(req.params.season, req.params.week, res))
	.put('/week', (req, res) => db.updateCurrentWeek(req.body.week, res))
	.put('/playerdata/:season/:week', (req, res) => fdsApi.updateAllPlayerStatsFromApi(req.params.season, req.params.week, res))
	.listen(port, '0.0.0.0', () => console.log(`express listening on port ${port}`));
