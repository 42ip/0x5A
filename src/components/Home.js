import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reset from "../auth/Reset";
import "../App.css";
import Profile from "./Profile";
import Matches from "./Matches";
import Chat from "./Chat";
import Userfront from "@userfront/react";
import { RiUserHeartLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
export default class Home extends Component {
  render() {
    function settingfun(e) {
      if (document.querySelector(".settings").style.display === "block") {
        document.querySelector(".settings").style.display = "none";
      } else {
        document.querySelector(".settings").style.display = "block";
      }
    }

    function settingfun2(e) {
      document.querySelector(".settings").style.display = "none";
    }
    return (
      <Router>
        <div className="App">
          <nav>
            <div class="adg">
              <button class="nav-button appname" onClick={settingfun2}>
                <Link to="/dashboard">APPNAME</Link>
              </button>
              <button class="nav-button" onClick={Userfront.logout}>
                <Link>Logout</Link>
              </button>
              <button class="nav-button" onClick={settingfun2}>
                <Link to="/matches">
                  <RiUserHeartLine />
                  Matches
                </Link>
              </button>
              <button class="nav-button" onClick={settingfun} style={{cursor: "pointer", outline: "none"}}>
                  <RiUserSettingsLine />
                  Settings
              </button>
            </div>
          </nav>
          <div class="settings">
            <h4 id="1">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </h4>
            <h4 id="2">
              <Link to="/chat" style={{ textDecoration: "none" }}>
                Chat
              </Link>
            </h4>
            <h4 id="3">
              <Link to="/reset" style={{ textDecoration: "none" }}>
                Change Password
              </Link>
            </h4>
          </div>
          <div class="settings">
            <h4 id="1">Profile</h4>
            <h4 id="2">Chat</h4>
            <h4 id="3">
              <Link to="/reset" style={{ textDecoration: "none" }}>
                Change Password
              </Link>
            </h4>
          </div>
          <Switch>
            <Route path="/dashboard"></Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/matches">
              <Matches />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
