const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const express = require('express');
const app = express();

const authenticate = (req, res) => {
  // loginInfo = getUserInfo(req.body.username);
  // if (req.password !== loginInfo.password) {
  //   if (loginInfo.password === null) {
  //     db.addUser(req.username, req.password);
  //   } else {
  //     res.send({isLoggedIn: false});
  //   }
  // } else {
  //   res.send(loginInfo);
  // }
  if (req.body.password === 'password') {
    res.json({text: 'TEXT'});
  }
};

// const getUserInfo = (username, callback) => {
//   let loginInfo = {
//     username: username,
//     // password:
//     // myTeam:
//     // foreignTeam:
//   }
//   db.checkPassword(username, (err, password) => loginInfo.password = password)
//   .then(db.getTeam(username, (err, teamName) => loginInfo.myTeam = teamName))
//   .then(db.getRivalInfo(username))
//   .then(db.getTeam(rival, (err, rival) => loginInfo.foreignTeam = rivalTeam)
//   .then((loginInfo) => loginInfo);
// };
//
// const addUser = (username, password, callback) => {
//   const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   let userId = ids.pop();
//   db.saveUser(username, password, userId)
//   // db.assignTeam(userId);
//   .then(getUserInfo(username, () => return ));
// };

module.exports= {
  authenticate
  // getUserInfo,
  // addUser
}
