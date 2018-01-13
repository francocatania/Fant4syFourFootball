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
          /><br />
    
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            className="textField"
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




