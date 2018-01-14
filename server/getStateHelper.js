const db = require('../database/index.js');
const axios = require('axios');

const getUserStateInfo = (username, res) => {

function getWeek() {
  return axios.get('http://localhost:4444/week');
}
function getMatchups() {
  return axios.get('http://localhost:4444/matchups');
}
function getUserInfo(username) {
  return axios.get(`http://localhost:4444/user/${username}`);
}
function getOpposingUserInfo(username) {
  return axios.get(`http://localhost:4444/user/${username}`);
}
function getUserInfoById(userId) {
  return axios.get(`http://localhost:4444/userbyid/${userId}`);
}
function getUserTeam(username, week) {
  return axios.get(`http://localhost:4444/teamstats/${username}/${week}`);
}
function getOpposingTeam(opposingUsername, week) {
  return axios.get(`http://localhost:4444/teamstats/${opposingUsername}/${week}`);
}

const getUserState = (username, res) => {
  axios.all([getWeek(), getMatchups(), getUserInfo(username)])
    .then(axios.spread((week, matchups, userInfo) => {
      const weekState = week.data;
      const userInfoState = userInfo.data[0];
      const userId = userInfo.data[0].id;
      const matchupState = matchups.data;
      const rivalId = matchups.data.reduce((current, next) => {
        return next.user_id === userId ? next.rival_id : current;
      }, null)

      axios.all([getUserTeam(userInfoState.username, weekState.week), getUserInfoById(rivalId)])
        .then(axios.spread((userTeam, opposingUserInfo) => {
          const userTeamState = userTeam.data;
          const opposingUserInfoState = opposingUserInfo.data[0];

          axios({
            method:'get',
            url: `http://localhost:4444/teamstats/${opposingUserInfoState.username}/${weekState.week}`,
          })
            .then(opposingTeam => {
              const opposingTeamState = opposingTeam.data;

              const stateMakerObj = {
                week: weekState,
                matchups: matchupState,
                userInfo: userInfoState,
                rivalInfo: opposingUserInfoState,
                userTeam: userTeamState,
                opposition: opposingTeamState,
                isLoggedIn: true
              }
              console.log(stateMakerObj);
              res.send(stateMakerObj);
            })
            .catch((err) => {
              console.log('failed to retrieve state');
            });
        }))
    }))
};

module.exports.getUserState = getUserState;