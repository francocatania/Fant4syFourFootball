const db = require('../database/index.js');
const axios = require('axios');

const updateWinsLosses = (id, result, res) => {
	if (result === 'win') {
		db.updateWins(id, res);
	} else if (result === 'loss') {
		db.updateLosses(id, res);
	}
};

const authenticate = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (req.body.password !== 1234) {
    if (1234 === null) {
      // db.addUser(req.body.username, req.body.password);
    } else {
      res.send({isLoggedIn: false});
    }
  } else {
    getUserInfo(username, res);
  }
};


const getUserInfo = (username, res) => {

    function getWeek() {
      return axios.get('http://localhost:4444/week');
    }
    function getMatchups() {
      return axios.get('http://localhost:4444/matchups');
    }
    function getUserInfo() {
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

    axios.all([getWeek(), getMatchups(), getUserInfo()])
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




const addUser = (username, password, callback) => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let userId = ids.pop();
  db.saveUser(username, password, userId)
  .then(getUserInfo(username, () => {return} ));
};

module.exports.authenticate = authenticate;
module.exports.getUserInfo = getUserInfo;
module.exports.addUser = addUser;
