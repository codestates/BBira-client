import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from '../pages/Home.js';
import Signin from '../pages/Signin.js';
import Signup from '../pages/Signup.js';

function BBiraRoute({ isLoggedIn }) {
  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default BBiraRoute;
