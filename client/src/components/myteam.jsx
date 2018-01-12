import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

// import {
//   blue300,
//   indigo900,
//   orange200,
//   deepOrange300,
//   pink400,
//   purple500,
// } from 'material-ui/styles/colors';

const style = {margin: 5};

const MyTeam = () => {
  return (
  
    <div>
     
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar
            src="http://www.patriots.com/sites/patriots.com/files/styles/borealis_no_limit_respondsmall/public/embedded-photos/elvis_helmet.jpg?itok=pi2EIpOL"
            size={130}
            style={style}
          />
        }
      >  
      </ListItem>
  
  
    </div>
  

    );
  }

export default MyTeam


