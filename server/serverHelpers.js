const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const express = require('express');
const app = express();

const authenticate = (username, password) => {
  loginInfo = db.getUserInfo(req.username);
  if (req.password !== loginInfo.password) {
    if (loginInfo.password === null) {
      db.addUser(req.username, req.password);
    } else {
      res.send({isLoggedIn: false});
    }
  } else {
    res.send(loginInfo);
  }
};

const getUserInfo = (username, callback) => {
  if (err) {
    return null;
  } else {
    let loginInfo = {
      username: username,
      password: db.getPassword(user),
      myTeam: db.getTeam(user),
      foreignTeam: db.getTeam(getOpponent(user))
    }
    return loginInfo;
  }
};

const addUser = (username, password, callback) => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let userId = ids.pop();
  db.saveUser(username, password, userId);
  // db.assignTeam(userId);
  getUserInfo(userId);
};

module.exports= {
  authenticate,
  getUserInfo,
  addUser
}
