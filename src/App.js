import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import Friend from "./components/Friend";

function App() {
  const [friends, setFriends] = useState([]);
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <h2>Friend's Database</h2>

        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              {" "}
              <NavLink to="/friends">Friends</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              {" "}
              <NavLink to="/friends/add">Add Friend</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              {" "}
              <NavLink to="/logout">Logout</NavLink>
            </li>
          )}
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/friends/add" component={AddFriend} />
        <PrivateRoute
          exact
          path="/friends"
          component={FriendsList}
          friends={friends}
          setFriends={setFriends}
        />
      </Switch>
      <PrivateRoute path="/friend/:id" component={Friend} />
    </Router>
  );
}

export default App;
