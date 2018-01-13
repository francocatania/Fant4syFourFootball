import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Login from './login.jsx';
import Home from './home.jsx';
import League from './league.jsx';
import MyTeam from './myteam.jsx';
import Matchups from './matchups.jsx';
import Draft from './draft.jsx';
import DraftEntry from './draftEntry.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {draftPicks} from '../../../api/apiSimulation/teams.js';
// const draftPicks = require('../../../api/apiSimulation/teams.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
      players: [],
      teamName: "",
      matchup: "",
      league: "",
      leaguepassword: "",
      league: ""
>>>>>>> define handle checkOutTeams, pass props down to league
    };

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  validateEntry() {
    // make sure characters are allowed
  }

  handleSignIn(event) {
    console.log('clicked');
    fetch('/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.value,
        password: event.target.value
      }),
    })
    .then((response) => console.log(response))
    .catch((error) => {
      console.error(error);
    });
    event.preventDefault();
  }

  handleLogOut(event) {
    this.setState({
      isLoggedIn: false
    })
  }

  handleCheckOutTeam(event) {
    this.setState({
<<<<<<< HEAD
<<<<<<< HEAD
      currentForeignTeam: "",
      foreignTeam: "",
      foreignPlayers: []
=======
      currentForeignTeam: "",
      foreignTeam: "",
      foreignPlayers: []
>>>>>>> refactor state
    })
  }

  render () {
    // if isLoggedIn = true, conditionally render / to lead to Home
    const isLoggedIn = this.state.isLoggedIn;
    let logout = null;
    let rootPath = null;
    let navBar = null

    // <Route exact path="/" render={() => (isloggedIn ? (<Redirect to="/dashboard"/>) : (<PublicHomePage/>))}/>

    if (isLoggedIn) {
      logout =  <button id="logout" onClick={this.handleLogOut}><Link to="/">Log out</Link></button>;
      rootPath = <Route exact path="/app" component={App}/>
      navBar = (<div id="navbar">
        {logout}
        <ul>
          <li id="navbar-item"><Link to="/home">Home</Link></li>
          <li id="navbar-item"><Link to="/league">League</Link></li>
          <li id="navbar-item"><Link to="/myteam">My Team</Link></li>
          <li id="navbar-item"><Link to="/matchups">Matchups</Link></li>
          <li id="navbar-item"><Link to="/draft">Draft</Link></li>
        </ul>

        <Route path="/home" component={Home}/>
        <Route path="/league" render={ props => (<League handleCheckOutTeam={this.handleCheckOutTeam.bind(this)}/>)} />
        <Route path="/myteam" component={MyTeam}/>
        <Route path="/matchups" component={Matchups}/>
        <Route path="/draft" component={Draft}/>
      </div>);
    } else {
      rootPath = (<Route exact path="/"
                         render={ props => (<Login handleSignIn={this.handleSignIn.bind(this)}
                         validateEntry={this.validateEntry.bind(this)} />)}
                         />);
    }
    return (
      <MuiThemeProvider>
      <div>
        {navBar}
        <br />

        {rootPath}
<<<<<<< HEAD
        <Route path="/home" component={Home}/>
        <Route path="/league" render={ props => (<League handleCheckOutTeam={this.handleCheckOutTeam.bind(this)}/> />)} />
        <Route path="/myteam" component={MyTeam}/>
        <Route path="/matchups" component={Matchups}/>
        <Route path="/draft" render={props => (<Draft
                         draftPicks={draftPicks} />)}
                         />
=======
>>>>>>> attempt redirect
      </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>), document.getElementById('app'));
