const currentWeekAndSeason = `SELECT currentweek, currentseason FROM leagues`;

const updateCurrentWeek = `UPDATE leagues
SET currentweek = ?
WHERE id = 1`

const savePlayer = `INSERT INTO players
    (id, name, position)
    VALUES
    (?, ?, ?)`;

const allStats = [
    'week',
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

const savePlayerStats = `
    INSERT INTO playerstats
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

    VALUES(
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
const playersInTeam = `
    SELECT players.id, players.name, players.position, playerStats.*, teams.id as teamId
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
    AND playerStats.week = ?
    ORDER BY players.position`;


// get rival given a user_id for a given week
const getRivalInfo = `SELECT users.id as rival_user_id, users.username as rival_username FROM users
    INNER JOIN teams
    ON users.id = teams.owner
    INNER JOIN matches
    ON teams.id = matches.rival_id
    WHERE matches.week = ?
    AND matches.user_id = ?`;

const updatePlayerStats = `UPDATE playerstats
    SET week = ?,
        playerID = ?,
        passingYards = ?,
        passingTouchdowns = ?,
        passingInterceptions = ?,
        rushingYards = ?,
        rushingTouchdowns = ?,
        receptions = ?,
        receivingYards = ?,
        receivingTouchdowns = ?,
        fumbles = ?,
        fieldGoalsMade0to19 = ?,
        fieldGoalsMade20to29 = ?,
        fieldGoalsMade30to39 = ?,
        fieldGoalsMade40to49 = ?,
        fieldGoalsMade50Plus = ?,
        extraPointsMade = ?,
        isGameOver = ?
    WHERE week = ?
    AND playerID = ?`;

const saveUserInfo = `
    INSERT INTO users
    (userId, username, password)
    VALUES
    (?, ?, ?)`;

const findPassword = `
    SELECT password FROM
    users WHERE
    name = ?`;

const getTeamName = `
    SELECT name FROM
    teams WHERE
    owner = ?`

module.exports = {
  savePlayerStats,
  savePlayer,
  allStats,
  playersInTeam,
  getRivalInfo,
  updatePlayerStats;
  saveUserInfo,
  findPassword,
  getTeamName
}
