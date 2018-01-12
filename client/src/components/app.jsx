import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './login.jsx';
import Home from './home.jsx';
import League from './league.jsx';
import MyTeam from './myteam.jsx';
import Matchups from './matchups.jsx';
import Draft from './draft.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {draftPicks} from '../../../api/apiSimulation/teams.js';
require draftPicks from ('../../../api/apiSimulation/teams.js');

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
      draftPicks: 
    };

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  validateEntry() {
    // make sure characters are allowed
  }

  handleLoginStateChange() {
    this.setState({
      isLoggedIn: true,
      // username: response.username,
      // password: response.password,
      // players: response.players,
      // teamName: response.teamName,
      // matchup: response.matchup,
    });
    // switch to myTeam view
  }

  handleSignIn(event) {
    // console.log('clicked');
    // $.ajax({
    //   method: 'POST',
    //   url: '/???'
    //   data: /* username & password */
    // }).then(() => {
    //     /* success: setState and toggle isLoggedIn */
    //     /* fail: rerender login page with error */
    // }),
    // this.setState({
    //   isLoggedIn: true
    // })
    this.handleLoginStateChange();
    // event.preventDefault();
  }

  handleLogOut(event) {
    this.setState({
      isLoggedIn: false
    })
  }

  render () {
    // if isLoggedIn = true, conditionally render / to lead to Home
    const isLoggedIn = this.state.isLoggedIn;
    let logout = null;
    let rootPath = null;
    let navBar = null
    if (isLoggedIn) {
      logout =  <button id="logout" onClick={this.handleLogOut}><Link to="/">Log out</Link></button>;
      rootPath = <Route exact path="/app" component={App}/>
      navBar = (<div id="navbar">
        {logout}
        <ul>
          <li id="navbar-item"><Link to="/league">League</Link></li>
          <li id="navbar-item"><Link to="/myteam">My Team</Link></li>
          <li id="navbar-item"><Link to="/matchups">Matchups</Link></li>
          <li id="navbar-item"><Link to="/draft">Draft</Link></li>
        </ul>
      </div>);
    } else {
      rootPath = (<Route exact path="/"
                         render={ props => (<Login handleSignIn={this.handleSignIn.bind(this)} handleLoginStateChange={this.handleLoginStateChange.bind(this)}
                         validateEntry={this.validateEntry.bind(this)} />)}
                         />);
    }
    return (
      <MuiThemeProvider>
      <div>
        {navBar}
        <br />

        {rootPath}
        <Route path="/home" component={Home}/>
        <Route path="/league" component={League}/>
        <Route path="/myteam" component={MyTeam} players={this.state.players}/>
        <Route path="/matchups" component={Matchups}/>
        <Route path="/draft" component={Draft} draftPicks={draftPicks.draftPicks}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>), document.getElementById('app'));
