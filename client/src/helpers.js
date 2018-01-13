const getPlayerScore = player => {
    let total = 0;
    total += player.passingYards * 0.025;
    total += player.passingTouchdowns * 4;
    total += player.passingInterceptions * -1;
    total += player.rushingYards * 0.1;
    total += player.rushingTouchdowns * 6;
    total += player.receptions * 0.5;
    total += player.receivingYards * 0.1;
    total += player.receivingTouchdowns * 6;
    total += player.fumbles * -1;
    total += player.fieldGoalsMade0to19 * 3;
    total += player.fieldGoalsMade20to29 * 3
    total += player.fieldGoalsMade30to39 * 3
    total += player.fieldGoalsMade40to49 * 4;
    total += player.fieldGoalsMade50Plus * 5;
    total += player.extraPointsMade;
    console.log(total)

    return total;
}

const fakePlayer = {
    id: 1234,
    name: 'Frank The Tank',
    position: 'QB',
    passingYards: 146,
    PassingTouchdowns: 3,
    passingInterceptions: 0,
    rushingYards: 57,
    rushingTouchdowns: 1,
    receptions: 0,
    receivingYards: 0,
    receivingTouchdowns: 0,
    fumbles: 0,
    fieldGoalsMade0to19: 0,
    fieldGoalsMade20to29: 0,
    fieldGoalsMade30to39: 0,
    fieldGoalsMade40to49: 0,
    fieldGoalsMade50Plus: 0,
    extraPointsMade: 2,
}

// array of objects containing both player info and stats for a given week
const getTeamScore = (team) => { 
    let totalPoints = 0;
    team.forEach( player => {
      totalPoints += getPlayerScore(player);
    })
    return totalPoints;
}


module.exports.fakePlayer = fakePlayer;
module.exports.getTeamScore = getTeamScore;