import React from 'react';


const TeamTable2 = (props) => {
  return (
  <div>
  
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Player Name</th>
          <th>Bye</th>
          <th>Points</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>QB</td>
          <td>Drew Brees </td>
          <td>5</td>
          <td>12.16</td>
        </tr>
        <tr>
          <td>WR</td>
          <td>Demaryius Thomas</td>
          <td>5</td>
          <td>9.20</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  
</div>
    );
  }

export default TeamTable2;



// const TeamTable = (props) => {
//   return (

//   <Table>
//     <TableHeader>
//       <TableRow>
//         <TableHeaderColumn>QB</TableHeaderColumn>
//         <TableHeaderColumn>Offense</TableHeaderColumn>
//         <TableHeaderColumn>Bye</TableHeaderColumn>
//         <TableHeaderColumn>Points</TableHeaderColumn>
//       </TableRow>
//     </TableHeader>
//     <TableBody>
//       {props.players.map((player, index) =>{
//           return <TableRow>
//                  <TableRowColumn>{player.position}</TableRowColumn>
//                  <TableRowColumn>{player.name}</TableRowColumn>
//                  <TableRowColumn>5</TableRowColumn>
//                  <TableRowColumn>12.16</TableRowColumn>
//                  </TableRow>
//       })}
      
//     </TableBody>
//   </Table> 
  

//     );
//   }