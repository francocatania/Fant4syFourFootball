import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const fakeTeamsInfo = [
  {'id': 1234, 'name': 'Team1', 'coach': 'reenuka', 'league': 1, 'wins': 3, 'losses': 0},
  {'id': 2345, 'name': 'Team2', 'coach': 'daharlow', 'league': 1, 'wins': 2, 'losses': 1},
  {'id': 3456, 'name': 'Team3', 'coach': 'mcooper', 'league': 1, 'wins': 1, 'losses': 2},
  {'id': 4567, 'name': 'Team4', 'coach': 'fcatania', 'league': 1, 'wins': 0, 'losses': 3},
]
// Should the list of teams come from App.jsx as props ?
// It will be faster if we keep that info as a state in the app component.
const League = (props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Position</TableHeaderColumn>
          <TableHeaderColumn>Team Name</TableHeaderColumn>
          <TableHeaderColumn>Coach</TableHeaderColumn>
          <TableHeaderColumn>Wins</TableHeaderColumn>
          <TableHeaderColumn>Losses</TableHeaderColumn>
        </TableRow>
      </TableHeader>

      <TableBody>
        {fakeTeamsInfo.map( (team, index) => {
          return (
            <TableRow>
              <TableRowColumn>{index + 1}</TableRowColumn>
              <TableRowColumn>{team.name}</TableRowColumn>
              <TableRowColumn>{team.coach}</TableRowColumn>
              <TableRowColumn>{team.wins}</TableRowColumn>
              <TableRowColumn>{team.losses}</TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>

    </Table>
  );
}

export default League
