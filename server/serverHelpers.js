const db = require('../database/index.js');

const updateWinsLosses = (id, result, res) => {
    if (result === 'win') {
        db.updateWins(id, res);
    } else if (result === 'loss') {
        db.updateLosses(id, res);
    }
};

module.exports.updateWinsLosses = updateWinsLosses;
