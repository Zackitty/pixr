import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import VideoPlayer from "./components/VideoPlayer"
import UserList from './components/UsersList';
import JiuTubePlayer from "./components/JiuTubePlayer"


function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users">
                <UserList />
            </Route>

            <Route path="/"
                component={JiuTubePlayer} 
            />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
