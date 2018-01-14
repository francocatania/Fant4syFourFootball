import React from 'react';
import {Card, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const buttonStyle = {
  margin: 12
};


const ProfileCard = (props) => {
  return (
  <div>
    <Card>
    <br/>
      <h1 align="center">Team: Brady Gaga</h1>
    <RaisedButton style={buttonStyle}>Edit Team</RaisedButton>
  </Card>
 </div>
    );
  }

export default ProfileCard


// <div>
//     <Card>
//       <h1 float="right">Team: Brady Gaga</h1>
//   <img src="http://hddfhm.com/images/new-england-patriots-helmet-clipart-4.png" alt="Avatar" class="avatar"/>
//     <CardActions>
//       <FlatButton label="Edit Team" />
//     </CardActions>
//   </Card>
//  </div>
//  </div>
