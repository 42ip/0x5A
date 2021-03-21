import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reset from "../auth/Reset";
import "../App.css";
import Userfront from "@userfront/react";
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
              <Link to="/">Matches</Link>
            </button>
            <button class="nav-button">
              <Link to="/">Settings</Link>
            </button>
          </nav>
		  <div class="settings">
			  <h4 id="1">Profile</h4>
			  <h4 id="2">Chat</h4>
			  <h4 id="3"><Link to="/reset" style={{textDecoration: "none" }}>Change Password</Link></h4>
		  </div>
          <Switch>
            <Route path="/dashboard"></Route>
			<Route path="/reset">
				<Reset />
			</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
