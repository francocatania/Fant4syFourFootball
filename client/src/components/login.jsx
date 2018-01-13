import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div className="login">
            <h5>LOG IN</h5>
            <label><b>Username: </b></label>
            <input onChange={this.props.handleUserEntry} type="text" placeholder="Enter username" name="username" required></input>
            <br />
            <label><b>Password: </b></label>
            <input onChange={this.props.handleUserEntry} type="password" placeholder="Enter Password" name="password" required></input>
            <br />
            <button onClick={this.props.handleSignIn}>Log In!</button>
          </div>
        </form>
        <form>
          <div className="signup">
            <h5>SIGN UP</h5>
            <label><b>Username: </b></label>
            <input onChange={this.props.handleUserEntry} type="text" placeholder="Enter username" name="username" required></input>
            <br />
            <label><b>Password: </b></label>
            <input onChange={this.props.handleUserEntry} type="password" placeholder="Enter Password" name="password" required></input>
            <br />
            <button onClick={this.props.handleSignIn}>Sign Up!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login

// Include in render if team naming functionality is added:
// <label><b>Team Name: </b></label>
// <input onChange={this.props.handleUserEntry} type="text" placeholder="Enter Team Name" name="teamname" required></input>
// <br />
