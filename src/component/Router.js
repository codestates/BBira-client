import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from '../pages/Home.js';
import Signin from '../pages/Signin.js';
import Signup from '../pages/Signup.js';
import Mypage from '../pages/Mypage.js';
import Itemlist from '../pages/Itemlist.js';
import Createitem from '../pages/Createitem.js';
import Store from '../pages/Store.js';
import AllStore from '../pages/AllStore';
// import Edititem from '../pages/EditItem.js';

function BBiraRoute({ isLoggedIn, setLoggedIn }) {
  return (
    <>
      <Router>
        <Nav isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <Signin setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/mypage">
            <Mypage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/mystore">
            <Itemlist isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/create">
            <Createitem isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default BBiraRoute;
