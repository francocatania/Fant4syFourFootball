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
	.post('/', (req, res) => serverHelpers.authenticate(req, res))
	.get('/week', (req, res) => db.getCurrentWeek(res))
	.get('/user/:username', (req, res) => db.getUserInfo(res))
	.get('/scores/:season/:week', (req, res) => db.getMatchScores(req.params.season, req.params.week, res))
	.get('/teamstats/:username/:week', (req, res) => db.getAllPlayersByTeam(req.params.username, req.params.week, res))
	.get('/matchups', (req, res) => db.getCurrentMatches(res))
	.get('/league/:leagueId', (req, res) => db.getLeagueInfo(req.params.leagueId, res))
	.post('/player', (req, res) => fdsApi.getNewPlayersFromApi(res))
	.post('/playerdata/:season/:week', (req, res) => fdsApi.getAllPlayerStatsFromApi(req.params.season, req.params.week, res))
	.put('/week', (req, res) => db.updateCurrentWeek(req.body.week, res))
	.put('/playerdata/:season/:week', (req, res) => fdsApi.updateAllPlayerStatsFromApi(req.params.season, req.params.week, res))
	.put('/teams/:id:/:result', (req, res) => serverHelpers.updateWinsLosses(req.params.id, req.params.result, res))
	.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')))
	.listen(port, '0.0.0.0', () => console.log(`express listening on port ${port}`));
