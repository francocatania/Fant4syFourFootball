const currentWeekAndSeason = `SELECT currentweek, currentseason FROM leagues`;

const updateCurrentWeek = `UPDATE leagues
SET currentweek = ?
WHERE id = 1`;

const updateWins = `UPDATE teams
  SET wins = wins + 1
  WHERE id = ?`;

const updateLosses = `UPDATE teams
  SET losses = losses + 1

const getMatches = `SELECT * FROM matches
    WHERE week = ?`;

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

// NEED TO PASS user_id and week values as an argument in query.
const playersInTeamByUserID = `
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
    WHERE users.id = ?
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


const leagueInfo = `SELECT teams.*, users.username as coach FROM teams
    INNER JOIN users
    ON teams.owner = users.id
    WHERE league = ?
    ORDER BY teams.wins DESC`;

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

module.exports.savePlayerStats = savePlayerStats;
module.exports.savePlayer = savePlayer;
module.exports.allStats = allStats;
module.exports.playersInTeam = playersInTeam;
module.exports.getRivalInfo = getRivalInfo;
module.exports.updatePlayerStats = updatePlayerStats;
module.exports.currentWeekAndSeason = currentWeekAndSeason;
module.exports.updateCurrentWeek = updateCurrentWeek;
module.exports.updateWins = updateWins;
module.exports.updateLosses = updateLosses;
module.exports.getMatches = getMatches;
module.exports.playersInTeamByUserID = playersInTeamByUserID;
module.exports.leagueInfo = leagueInfo;
module.exports.saveUserInfo = saveUserInfo;
module.exports.findPassword = findPassword;
module.exports.getTeamName = getTeamName;
module.exports.leagueInfo = leagueInfo;
