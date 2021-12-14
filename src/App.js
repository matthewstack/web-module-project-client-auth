import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
      </div>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/friends" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
