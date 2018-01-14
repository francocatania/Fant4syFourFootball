//serverHelpers.js
  const getUserInfo = (username, callback) => {
  let loginInfo = {
    username: username
  }
  db.checkPassword(username, (err, password) => {
    if (err) {
      console.error(err);
    } else {
      loginInfo.password = password;


  .then(db.getTeam(username, (err, teamName) => loginInfo.myTeam = teamName))
  .then(db.getRivalInfo(username))
  .then(db.getTeam(rival, (err, rival) => loginInfo.foreignTeam = rivalTeam)
  .then((loginInfo) => loginInfo));
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