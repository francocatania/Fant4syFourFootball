import React from 'react';
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
                 <TableRowColumn>12.16</TableRowColumn>
                 <TableRowColumn>Stats</TableRowColumn>
                 </TableRow>
      })}
      
    </TableBody>
  </Table>
  

    );
  }

export default OpponentTeamTable