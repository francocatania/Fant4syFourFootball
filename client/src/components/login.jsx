import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12
};


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test1">
        <form className="forms">
          <div className="login" >
            <h2 className="homepage">LOG IN</h2>
<<<<<<< HEAD

=======
            
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            className="testField"
<<<<<<< HEAD
            name="username"
            onChange={this.props.handleUserEntry}
          /><br />

=======
          /><br />
    
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            className="textField"
<<<<<<< HEAD
            name="password"
            onChange={this.props.handleUserEntry}
          /><br />

=======
          /><br />
      
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Log In</RaisedButton>
          </div>
        </form>


        <form className="forms">
          <div className="signup" >
            <h2 className="homepage">SIGN UP</h2>
<<<<<<< HEAD

          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            name="username"
            onChange={this.props.handleUserEntry}
          /><br />

=======
            
          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
          /><br />
    
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
<<<<<<< HEAD
            name="password"
            onChange={this.props.handleUserEntry}
          /><br />

=======
          /><br />

          <TextField
            hintText="Team Name"
            floatingLabelText="Team Name"
            type="password"
          /><br />
      
>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Sign Up</RaisedButton>
          </div>
        </form>

      </div>
    );
  }
}


export default Login

<<<<<<< HEAD
// IF TEAMS ARE NOT HARDCODED IN
// <TextField
//   hintText="Team Name"
//   floatingLabelText="Team Name"
//   type="password"
// /><br />
=======



>>>>>>> 5976c78859a0f2c3fba46f6773c3178d86c5c36e
