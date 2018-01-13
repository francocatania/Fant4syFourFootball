import React from 'react';
import {getTeamScore, fakePlayer} from '../helpers.js'

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
        <p> Maaachop </p>
      </div>
    );
  }

}

export default Matchups;