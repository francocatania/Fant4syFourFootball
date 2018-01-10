import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './login.jsx';
import League from './league.jsx';
import MyTeam from './myteam.jsx';
import Matchups from './matchups.jsx';
import Draft from './draft.jsx';

const App = () => {
  return (
    <div>
      <div id="navbar">
        <button id="logout"><Link to="/">Log out</Link></button>

        <ul>
          <li id="navbar-item"><Link to="/league">League</Link></li>
          <li id="navbar-item"><Link to="/myteam">My Team</Link></li>
          <li id="navbar-item"><Link to="/matchups">Matchups</Link></li>
          <li id="navbar-item"><Link to="/draft">Draft</Link></li>
        </ul>
      </div>

      <br />

    
    </div>
  );
}

ReactDOM.render((
  <Router>
    <App />
  </Router>), document.getElementById('app'));
