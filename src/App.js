import "./App.css";
import Userfront from "@userfront/react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Reset from "./auth/Reset";
import Dashboard from "./auth/Dashboard";
import Home from "./components/Home";
import Footer from "./components/Footer"

Userfront.init(process.env.REACT_APP_id);
function App() {
  if (!Userfront.accessToken()) {
    return (
      <Router>
        <div className="App">
          <nav>
            <div className="adg">
            <button className="nav-button">
              <Link to="/">Signup</Link>
            </button>
            <button className="nav-button">
              <Link to="/login">Login</Link>
            </button>
            <button className="nav-button">
              <Link to="/reset">Reset</Link>
              {/* planning on deleting later */}
            </button>
            <button className="nav-button">
              <Link to="/dashboard" class="important">Dashboard</Link>
            </button>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/reset' component={Reset} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Redirect to="/" />
          </Switch>
            </div>
            <footer>
                <Footer />
           </footer>
      </Router>
    );
  } else {
    return <Home />;
  }
}

export default App;
