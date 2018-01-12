import React from 'react';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';





const ProfileCard = (props) => {
  return (
  <div>
    <Card>
      <h1 float="right">Team: Brady Gaga</h1>
  <img src="http://hddfhm.com/images/new-england-patriots-helmet-clipart-4.png" alt="Avatar" class="avatar" float="left"/>
    <CardActions>
      <FlatButton label="Edit Team" />
    </CardActions>
  </Card>
 </div>
    );
  }

export default ProfileCard
