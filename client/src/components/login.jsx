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
      <div class="test1">
        <form class="forms">
          <div className="login" >
            <h2 class="homepage">LOG IN</h2>
            
          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
            class="testField"
          /><br />
    
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            class="textField"
          /><br />
      
            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Log In</RaisedButton>
          </div>
        </form>


        <form class="forms">
          <div className="signup" >
            <h2 class="homepage">SIGN UP</h2>
            
          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
          /><br />
    
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          /><br />

          <TextField
            hintText="Team Name"
            floatingLabelText="Team Name"
            type="password"
          /><br />
      
            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Sign Up</RaisedButton>
          </div>
        </form>

      </div>
    );
  }
}

export default Login



