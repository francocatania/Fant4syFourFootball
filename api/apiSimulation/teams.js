const team1 = ["Drew Brees", "Robby Anderson", "LeSean McCoy", "Rex Burkhead", "Devin Funchess", "Jake Elliott", "Amari Cooper", "Charles Clay"];
const team2 = ["Dak Prescott", "Adam Thielen", "Josh Gordon", "Le'Veon Bell", "Samaje Perine", "Trey Burton", "Mike Davis", "Blair Walsh"];
const team3 = ["Tom Brady", "Brandin Cooks", "Kenny Stills", "Alvin Kamara", "Leonard Fournette", "Evan Engram", "Devante Parker", "Matt Prater"];
const team4 = ["Case Keenum", "Doug Baldwin", "Larry Fitzgerald", "Christian McCaffrey", "Kareem Hunt", "Greg Olsen", "Dion Lewis", "Kai Forbath"];

const createDraft = () => {
	let draftPicks = [];
	for (let i =0; i < team1.length; i++) {
		draftPicks.push(team1[i])
		draftPicks.push(team2[i])
		draftPicks.push(team3[i])
		draftPicks.push(team4[i])
	}
	return draftPicks;
}

const draftPicks = createDraft();


module.exports.team1 = team1;
module.exports.team2 = team2;
module.exports.team3 = team3;
module.exports.team4 = team4;
module.exports.draftPicks = draftPicks;