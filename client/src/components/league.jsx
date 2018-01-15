import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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
        {props.teamsInfo.map( (team, index) => {
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
