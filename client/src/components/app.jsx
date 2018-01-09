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
      <ul>
        <li><Link to="/league">League</Link></li>
        <li><Link to="/myteam">My Team</Link></li>
        <li><Link to="/matchups">Matchups</Link></li>
        <li><Link to="/draft">Draft</Link></li>
      </ul>

      <button><Link to="/">Log out</Link></button>

      <br />

      <Route exact path="/" component={Login}/>
      <Route path="/league" component={League}/>
      <Route path="/myteam" component={MyTeam}/>
      <Route path="/matchups" component={Matchups}/>
      <Route path="/draft" component={Draft}/>
    </div>
  );
}

ReactDOM.render((
  <Router>
    <App />
  </Router>), document.getElementById('app'));
