import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Register from './components/Register'
import LoginPanel from './components/LoginPanel';
import NavBar from './components/NavBar';
import { loadToken } from './actions/authentication';
import Upload from "./components/Upload"
import Feed from "./components/Feed"


const PrivateRoute = ({ component: Component, ...rest }) => (
 
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

const App = (props) => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const needLogin = useSelector(state => !state.authentication.token);

  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPanel} />
        <Route path='/register' component={Register} />
        <PrivateRoute path="/"
          exact={true}
          needLogin={needLogin}
          component={NavBar} />
        <PrivateRoute path="/NavBar"
          exact={true}
          needLogin={needLogin}
          component={NavBar} />
          <PrivateRoute path='/upload'
          exact={true}
          needLogin={needLogin}
          component={Upload}
          /> <PrivateRoute path='/feed'
          exact={true}
          needLogin={needLogin}
          component={Feed}
          />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
