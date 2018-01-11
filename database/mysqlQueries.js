<<<<<<< HEAD
const savePlayer = `INSERT INTO players
(id, name, position)
VALUES
(?, ?, ?)`;

const allStats = ['week',
    'playerID',
    'passingYards',
    'passingTouchdowns',
    'passingInterceptions',
    'rushingYards',
    'rushingTouchdowns',
    'receptions',
    'receivingYards',
    'receivingTouchdowns',
    'fumbles',
    'fieldGoalsMade0to19',
    'fieldGoalsMade20to29',
    'fieldGoalsMade30to39',
    'fieldGoalsMade40to49',
    'fieldGoalsMade50Plus',
    'extraPointsMade',
    'twoPointConversionPasses',
    'twoPointConversionRuns',
    'twoPointConversionReceptions',
    'isGameOver'];

const savePlayerStats = `INSERT INTO playerStats
(week,
playerID,
passingYards,
passingTouchdowns,
passingInterceptions,
rushingYards,
rushingTouchdowns,
receptions,
receivingYards,
receivingTouchdowns,
fumbles,
fieldGoalsMade0to19,
fieldGoalsMade20to29,
fieldGoalsMade30to39,
fieldGoalsMade40to49,
fieldGoalsMade50Plus,
extraPointsMade,
twoPointConversionPasses,
twoPointConversionRuns,
twoPointConversionReceptions,
isGameOver)

VALUES

?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?)`;



module.exports.savePlayerStats = savePlayerStats;
module.exports.savePlayer = savePlayer;
module.exports.allStats = allStats;
=======
// const savePlayerStats = ``;
//
// const savePlayer = `INSERT INTO players
// (id, name, position)
// VALUES
// (${player.id}, ${player.name}, ${player.position})`;
//
//
//
// module.exports.savePlayerStats = savePlayerStats;
// module.exports.savePlayer = savePlayer;
>>>>>>> 5731556d529b694b216c2615621e0190a4450d1a
