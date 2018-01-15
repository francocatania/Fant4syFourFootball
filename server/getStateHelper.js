const db = require('../database/index.js');
const axios = require('axios');

let domain = 'http://localhost';
console.log('process.env.inStaging :', process.env.inStaging)
console.log('process.env.inStaging type :',typeof process.env.inStaging)
if (process.env.PORT) {
  domain = 'https://fant4syfootball.herokuapp.com'
}
if (process.env.inStaging === 'true') {
  domain = 'http://fant4syfootball-staging.herokuapp.com'
}

console.log('domain = ', domain);

let port = 4444;
if (process.env.PORT) {
  port = process.env.PORT
};

console.log('port = ', port);

function getWeek() {
  return axios.get(`${domain}:${port}/week`);
};
function getMatchups() {
  return axios.get(`${domain}:${port}/matches`);
};
function getAllTeams() {
  return axios.get(`${domain}:${port}/teams`);
};
function getAllUsers() {
  return axios.get(`${domain}:${port}/users`);
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
  axios.all([getWeek(), getMatchups(), getUserInfo(username), getAllUsers(), getAllTeams()])
    .then(axios.spread((week, matchups, userInfo, users, teams) => {
      const weekState = week.data;
      const userInfoState = userInfo.data[0];
      const userId = userInfo.data[0].id;
      const matchupState = matchups.data;
      const usersState = users.data;
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
                users: usersState,
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
              console.log('3rd then', 'failed to retrieve state');
            });
        }))
        .catch( err => console.error('2nd then', err));
    }))
    .catch( err => console.error('1st then', err));
};

module.exports.getUserState = getUserState;