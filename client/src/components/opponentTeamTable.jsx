import React from 'react';
import {getPlayerScore, getTeamScore} from '../helpers.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const OpponentTeamTable = (props) => {
  return (

  <Table class="table">
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Player Name</TableHeaderColumn>
        <TableHeaderColumn>Points</TableHeaderColumn>
        <TableHeaderColumn>Stats</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
       {props.players.map((player, index) =>{
          return <TableRow>
                 <TableRowColumn>{player.name}</TableRowColumn>
                 <TableRowColumn>{getPlayerScore(player).toFixed(2)}</TableRowColumn>
                 <TableRowColumn>Stats</TableRowColumn>
                 </TableRow>
      })}
    
    <TableRow>
    <TableRowColumn></TableRowColumn>
    <TableRowColumn>{getTeamScore(props.players).toFixed(2)}</TableRowColumn>
    <TableRowColumn></TableRowColumn>
    </TableRow>
    </TableBody>
  </Table>
  

    );
  }

export default OpponentTeamTable