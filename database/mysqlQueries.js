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
    'isGameOver'];

const savePlayerStats = `INSERT INTO playerstats
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
isGameOver)

VALUES
(
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

// NEED TO PASS username and week values as an argument in query.
const playersInTeam = `SELECT players.id, players.name, players.position, playerStats.*, teams.id as teamId
FROM playerStats
INNER JOIN players
ON playerStats.playerId = players.id
INNER JOIN Teams_has_Players
ON players.id = Teams_has_Players.Players_id
INNER JOIN teams
ON Teams_has_Players.Teams_id = teams.id
INNER JOIN users
ON teams.owner = users.id
WHERE users.username = ?
AND playerStats.week = ?`

module.exports.savePlayerStats = savePlayerStats;
module.exports.savePlayer = savePlayer;
module.exports.allStats = allStats;
