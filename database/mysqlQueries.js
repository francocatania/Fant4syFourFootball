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