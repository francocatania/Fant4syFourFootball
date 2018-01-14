import React from 'react';
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

  <Table class="table">
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
<<<<<<< HEAD

=======
      
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
    </TableBody>
  </Table>


    );
  }

export default TeamTable



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



 // <Table class="table">
 //    <TableHeader>
 //      <TableRow>
 //        <TableHeaderColumn>QB</TableHeaderColumn>
 //        <TableHeaderColumn>Offense</TableHeaderColumn>
 //        <TableHeaderColumn>Bye</TableHeaderColumn>
 //        <TableHeaderColumn>Points</TableHeaderColumn>
 //      </TableRow>
 //    </TableHeader>
 //    <TableBody>
 //      <TableRow>
 //        <TableRowColumn>QB</TableRowColumn>
 //        <TableRowColumn>Drew Brees</TableRowColumn>
 //        <TableRowColumn>5</TableRowColumn>
 //        <TableRowColumn>12.16</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>WR</TableRowColumn>
 //        <TableRowColumn>Demaryius Thomas</TableRowColumn>
 //        <TableRowColumn>5</TableRowColumn>
 //        <TableRowColumn>9.20</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>WR</TableRowColumn>
 //        <TableRowColumn>Robby Anderson</TableRowColumn>
 //        <TableRowColumn>11</TableRowColumn>
 //        <TableRowColumn>10.10</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //      <TableRowColumn>RB</TableRowColumn>
 //        <TableRowColumn>LeSean McCoy</TableRowColumn>
 //        <TableRowColumn>6</TableRowColumn>
 //        <TableRowColumn>19.70</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>RB</TableRowColumn>
 //        <TableRowColumn>Rex Burkhead</TableRowColumn>
 //        <TableRowColumn>9</TableRowColumn>
 //        <TableRowColumn>17.89</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>TE</TableRowColumn>
 //        <TableRowColumn>Delanie Walker</TableRowColumn>
 //        <TableRowColumn>8</TableRowColumn>
 //        <TableRowColumn>6.30</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>FLEX</TableRowColumn>
 //        <TableRowColumn>Devin Funchess</TableRowColumn>
 //        <TableRowColumn>11</TableRowColumn>
 //        <TableRowColumn>4.10</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>K</TableRowColumn>
 //        <TableRowColumn>Blair Walsh</TableRowColumn>
 //        <TableRowColumn>6</TableRowColumn>
 //        <TableRowColumn>6</TableRowColumn>
 //      </TableRow>
 //      <TableRow>
 //        <TableRowColumn>D/ST</TableRowColumn>
 //        <TableRowColumn>Minnesota D/ST</TableRowColumn>
 //        <TableRowColumn>7</TableRowColumn>
 //        <TableRowColumn>7</TableRowColumn>
 //      </TableRow>
 //    </TableBody>
<<<<<<< HEAD
 //  </Table>
=======
 //  </Table>
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
