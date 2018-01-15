import React from 'react';
import {getTeamScore, fakePlayer} from '../helpers.js';
import TeamTableMatchup from './teamTableMatchup.jsx';
import OpponentTeamTable from'./opponentTeamTable.jsx';

class Matchups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="matchups">
        <TeamTableMatchup players={this.props.userTeam}/>
      </div>

      <div className="matchups">
        <OpponentTeamTable players={this.props.opposition} />
      </div>
      </div>
    );
  }

}

export default Matchups;