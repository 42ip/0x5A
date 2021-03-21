import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Userfront from "@userfront/react";
import { RiUserHeartLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
export default class Home extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <button class="nav-button appname">
              <Link to="/">APPNAME</Link>
            </button>
            <button class="nav-button" onClick={Userfront.logout}>
              <Link to="/">Logout</Link>
            </button>
			<button class="nav-button">
              <Link to="/"><RiUserHeartLine />Matches</Link>
            </button>
            <button class="nav-button">
              <Link to="/"><RiUserSettingsLine />Settings</Link>
            </button>
          </nav>
          <Switch>
            <Route path="/dashboard"></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
