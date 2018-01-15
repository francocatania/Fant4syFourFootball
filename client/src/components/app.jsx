import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
//import Login from './deleteOption.jsx';
import Login from './login.jsx';
import Home from './home.jsx';
import League from './league.jsx';
import MyTeam from './myteam.jsx';
import Matchups from './matchups.jsx';
import Draft from './draft.jsx';
import DraftEntry from './draftEntry.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {draftPicks} from '../../../api/apiSimulation/teams.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
      league: "",
      leaguepassword: "",
      week: {},
      teams: [],
      users: [],
      matchups: [],
      userInfo: {},
      userTeam: [],
      rivalInfo: {},
      opposition: [],
    };

    this.setState = this.setState.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleUserEntry(event) {
    let obj = {}
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj);

    // fetch username week
  }

  handleSignIn(event) {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    })
    .then((response) => response.json())
    .then((data) => this.setState(data))
    .catch(() => alert("Incorrect Password"));
  }

  handleLogOut(event) {
    this.setState({
      isLoggedIn: false,
      username: "",
      password: "",
      league: "",
      leaguepassword: "",
      week: {},
      teams: [],
      matchups: [],
      userInfo: {},
      userTeam: [],
      rivalInfo: {},
      opposition: []
    })
  }

  handleCheckOutTeam(event) {
    this.setState({
      opposition: [],
      rivalInfo: {}
    })
  }

  render () {
    // if isLoggedIn = true, conditionally render / to lead to Home
    const isLoggedIn = this.state.isLoggedIn;
    let logout = null;
    let rootPath = null;
    let navBar = null;

    if (this.state.teams.length !== 0 && this.state.teams[0].coach === undefined) {
      this.state.users.forEach(user => {
        this.state.teams.forEach(team => {
          if (user.id === team.owner) {
            team.coach = user.username;
          }
        });
      });
    } 

    // <Route exact path="/" render={() => (isloggedIn ? (<Redirect to="/dashboard"/>) : (<PublicHomePage/>))}/>

    if (isLoggedIn) {
      logout =  <button id="logout" onClick={this.handleLogOut}><Link to="/">Log out</Link></button>;
      rootPath = <Route exact path="/app" component={App}/>
      navBar = (<div id="navbar">
        <ul id='navbar'>
          <li id="navbar-item"><Link to="/home">Home</Link></li>
          <li className="navbar-item" ><Link to="/league">League</Link></li>
          <li className="navbar-item"><Link to="/myteam">My Team</Link></li>
          <li className="navbar-item"><Link to="/matchups">Matchups</Link></li>
          <li className="navbar-item"><Link to="/draft">Draft</Link></li>
          {logout}
        </ul>

        <Route path="/home" component={Home}/>
        <Route path="/league" render={props => (<League
                         teamsInfo={this.state.teams}/>)}
                         />
        <Route path="/myteam" render={props => (<MyTeam
          players={this.state.userTeam}/>)}
          />
        <Route path="/matchups" render={props => (<Matchups 
          userTeam={this.state.userTeam} opposition={this.state.opposition}/>)}
          />
        <Route path="/draft" render={props => (<Draft
                         draftPicks={draftPicks} />)}
                         />
      </div>);
    } else {
      rootPath = (<Route exact path="/"
                         render={ props => (<Login handleSignIn={this.handleSignIn.bind(this)}
                         handleUserEntry={this.handleUserEntry.bind(this)} />)}
                         />);
    }
    return (
      <MuiThemeProvider>
      <div>
        {navBar}
        <br />

        {rootPath}

      </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>), document.getElementById('app'));
