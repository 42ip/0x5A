import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reset from "../auth/Reset";
import "../App.css";
import Userfront from "@userfront/react";
export default class Home extends Component {
	
  render() {
	function settingfun(e){
		if(document.querySelector(".settings").style.display==="block"){
			document.querySelector(".settings").style.display="none";
		}else{
		document.querySelector(".settings").style.display="block";
		}
	}

	function settingfun2(e){
			document.querySelector(".settings").style.display="none";
	}
    return (
      <Router>
        <div className="App">
          <nav>
            <button class="nav-button appname">
              <Link to="/">APPNAME</Link>
            </button>
            <button class="nav-button" onClick={Userfront.logout}>
              <Link >Logout</Link>
            </button>
			<button class="nav-button">
              <Link >Matches</Link>
            </button>
            <button class="nav-button" onClick={settingfun}>
              <Link >Settings</Link>
            </button>
          </nav>
		  <div class="settings">
			  <h4 id="1">Profile</h4>
			  <h4 id="2">Chat</h4>
			  <h4 id="3"><Link to="/reset" style={{textDecoration: "none" }} onClick={settingfun2}>Change Password</Link></h4>
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
