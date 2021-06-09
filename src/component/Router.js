import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';

function BBiraRoute({ isLoggedIn }) {
  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default BBiraRoute;
