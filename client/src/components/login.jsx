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

          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            className="testField"
            name="username"
            onChange={this.props.handleUserEntry}
          /><br />

          <br />

          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            className="textField"
            name="password"
            onChange={this.props.handleUserEntry}
          /><br />

            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Log In</RaisedButton>
          </div>
        </form>


        <form className="forms">
          <div className="signup" >
            <h2 className="homepage">SIGN UP</h2>

          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            name="username"
            onChange={this.props.handleUserEntry}
          /><br />

          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={this.props.handleUserEntry}
          /><br />


            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Sign Up</RaisedButton>
          </div>
        </form>

      </div>
    );
  }
}


export default Login

// IF TEAMS ARE NOT HARDCODED IN
// <TextField
//   hintText="Team Name"
//   floatingLabelText="Team Name"
//   type="password"
