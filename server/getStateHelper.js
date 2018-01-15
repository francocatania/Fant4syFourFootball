const db = require('../database/index.js');
const axios = require('axios');

let domain = 'http://localhost';
if (process.env.PORT) {
  domain = 'https://fant4syfootball.herokuapp.com'
} else if (process.env.inStaging) {
  domain = 'https://fant4syfootball-staging.herokuapp.com'
}

let port = 4444;
if (process.env.PORT) {
  port = process.env.PORT
};

function getWeek() {
  return axios.get(`${domain}:${port}/week`);
};
function getMatchups() {
  return axios.get(`${domain}:${port}/matches`);
};
function getAllTeams() {
  return axios.get(`${domain}:${port}/teams`);
};
function getUserInfo(username) {
  return axios.get(`${domain}:${port}/user/${username}`);
};
function getOpposingUserInfo(username) {
  return axios.get(`${domain}:${port}/user/${username}`);
};
function getUserInfoById(userId) {
  return axios.get(`${domain}:${port}/userbyid/${userId}`);
};
function getUserTeam(username, week) {
  return axios.get(`${domain}:${port}/teamstats/${username}/${week}`);
};
function getOpposingTeam(opposingUsername, week) {
  return axios.get(`${domain}:${port}/teamstats/${opposingUsername}/${week}`);
};

const getUserState = (username, res) => {
  axios.all([getWeek(), getMatchups(), getUserInfo(username), getAllTeams()])
    .then(axios.spread((week, matchups, userInfo, teams) => {
      const weekState = week.data;
      const userInfoState = userInfo.data[0];
      const userId = userInfo.data[0].id;
      const matchupState = matchups.data;
      const teamsState = teams.data;
      const rivalId = matchups.data.reduce((current, next) => {
        return next.user_id === userId ? next.rival_id : current;
      }, null)

      axios.all([getUserTeam(userInfoState.username, weekState.week), getUserInfoById(rivalId)])
        .then(axios.spread((userTeam, opposingUserInfo) => {
          const userTeamState = userTeam.data;
          const opposingUserInfoState = opposingUserInfo.data[0];

          axios({
            method:'get',
            url: `${domain}:${port}/teamstats/${opposingUserInfoState.username}/${weekState.week}`,
          })
            .then(opposingTeam => {
              const opposingTeamState = opposingTeam.data;

              const stateMakerObj = {
                week: weekState,
                teams: teamsState,
                matchups: matchupState,
                userInfo: userInfoState,
                rivalInfo: opposingUserInfoState,
                userTeam: userTeamState,
                opposition: opposingTeamState,
                isLoggedIn: true
              }
              res.send(stateMakerObj);
            })
            .catch((err) => {
              console.log('failed to retrieve state');
            });
        }))
    }))
};

module.exports.getUserState = getUserState;