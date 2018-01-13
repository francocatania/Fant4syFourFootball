const bodyParser = require('body-parser');
const path = require('path');

const fdsApi = require('../api/fantasyDataSolutions.js');
const teams = require('../api/apiSimulation/teams.js');
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
	.get('scores', (req, res) => db.getMatchScore(res))
	.get('/teamstats/:username/:week', (req, res) => db.getAllPlayersByTeam(username, week, res))
	.post('/player', (req, res) => fdsApi.getNewPlayersFromApi(res))
	.post('/playerdata/:season/:week', (req, res) => fdsApi.getAllPlayerStatsFromApi(req.params.season, req.params.week, res))
	.put('/week', (req, res) => db.updateCurrentWeek(req.body.week, res))
	.put('/playerdata/:season/:week', (req, res) => fdsApi.updateAllPlayerStatsFromApi(req.params.season, req.params.week, res))
	.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')))
	.listen(port, '0.0.0.0', () => console.log(`express listening on port ${port}`));
	.put('/teams/:id:/:result', (req, res) => serverHelpers.updateWinsLosses(req.params.id, req.params.result, res))
	.listen(port, '0.0.0.0', () => console.log(`express listening on port ${port}`));


	// needs to be called from App.jsx on login
	// needs to receive a username, and week (week is obtained from GET request to /week)
	// upon success promise fires a get request to teamstats to get the team
	// .get('/teamstats/:username/:week', (req, res) => db.getAllPlayersByTeam(username, week, res))
