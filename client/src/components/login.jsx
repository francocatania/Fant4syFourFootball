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
      <div>
        <form>
          <div className="login" class="forms">
            <h5>LOG IN</h5>
            
          <TextField
            hintText="Enter Username"
            floatingLabelText="Username"
          /><br />
    
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          /><br />
      
            <RaisedButton style={buttonStyle} onClick={this.props.handleSignIn}>Log In</RaisedButton>
          </div>
        </form>







        <form>
          <div className="signup" class="forms">
            <h5>SIGN UP</h5>
            
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



