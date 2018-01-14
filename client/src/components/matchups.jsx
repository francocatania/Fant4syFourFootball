import React from 'react';
import {getTeamScore, fakePlayer} from '../helpers.js';
import TeamTableMatchup from './teamTableMatchup.jsx';
import OpponentTeamTable from'./opponentTeamTable.jsx';

class Matchups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userTeam: [fakePlayer], // array of objects containing both player info and stats
      userTeamScore: 0,
      rivalTeam: [],
      rivalTeamScore: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let userTeamScore = getTeamScore(this.state.userTeam);
    let rivalTeamScore = getTeamScore(this.state.rivalTeam);

    this.setState({userTeamScore: userTeamScore});
    this.setState({rivalTeamScore: rivalTeamScore});
  }

  render() {
    return (
      <div>
      <div className="matchups">
        <TeamTableMatchup players={this.state.userTeam}/>
      </div>

      <div className="matchups">
        <OpponentTeamTable players={this.state.rivalTeam} />
      </div>
      </div>
    );
  }

}

export default Matchups;