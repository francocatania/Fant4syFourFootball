const db = require('../database/index.js');

const updateWinsLosses = (id, result, res) => {
	if (result === 'win') {
		db.updateWins(id, res);
	} else if (result === 'loss') {
		db.updateLosses(id, res);
	}
};

const authenticate = (req, res) => {
  loginInfo = getUserInfo(req.body.username);
  if (req.body.password !== loginInfo.password) {
    if (loginInfo.password === null) {
      db.addUser(req.body.username, req.body.password);
    } else {
      res.send({isLoggedIn: false});
    }
  } else {
    res.send(loginInfo);
  }
};

const getUserInfo = (username, callback) => {
  let loginInfo = {
    username: username
  }
  db.checkPassword(username, (err, password) => loginInfo.password = password)
  .then(db.getTeam(username, (err, teamName) => loginInfo.myTeam = teamName))
  .then(db.getRivalInfo(username))
  .then(db.getTeam(rival, (err, rival) => loginInfo.foreignTeam = rivalTeam)
  .then((loginInfo) => loginInfo);
};

const addUser = (username, password, callback) => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let userId = ids.pop();
  db.saveUser(username, password, userId)
  .then(getUserInfo(username, () => return ));
};

module.exports.authenticate = authenticate;
module.exports.getUserInfo = getUserInfo;
module.exports.addUser = addUser;
