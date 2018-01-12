import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';




const TeamTable = (props) => {
  return (

  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>QB</TableHeaderColumn>
        <TableHeaderColumn>Offense</TableHeaderColumn>
        <TableHeaderColumn>Bye</TableHeaderColumn>
        <TableHeaderColumn>Points</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.players.map((player, index) =>{
          return <TableRow>
                 <TableRowColumn>{player.position}</TableRowColumn>
                 <TableRowColumn>{player.name}</TableRowColumn>
                 <TableRowColumn>5</TableRowColumn>
                 <TableRowColumn>12.16</TableRowColumn>
                 </TableRow>
      })}
      
    </TableBody>
  </Table> 
  

    );
  }

export default TeamTable