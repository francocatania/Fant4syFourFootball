import React from 'react';
import {getPlayerScore, fakePlayer} from '../helpers.js'

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

  getTeamScore(team) {
    let totalPoints = 0;
    team.forEach( player => {
      totalPoints += getPlayerScore(player);
    })
    return totalPoints;
  }

  componentDidMount() {
    let userTeamScore = this.getTeamScore(this.state.userTeam);
    let rivalTeamScore = this.getTeamScore(this.state.rivalTeam);

    this.setState({userTeamScore: userTeamScore});
    this.setState({rivalTeamScore: rivalTeamScore});
  }

  render() {
    return (
      <div>
        <p> Maaachop </p>
      </div>
    );
  }

}

export default Matchups;