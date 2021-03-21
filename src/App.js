import "./App.css";
import Userfront from "@userfront/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Reset from "./auth/Reset";
import Dashboard from "./auth/Dashboard";
import Home from "./components/Home";
Userfront.init(process.env.REACT_APP_id);
function App() {
  if (!Userfront.accessToken()) {
    return (
      <Router>
        <div className="App">
          <nav>
            <button class="nav-button">
              <Link to="/">Signup</Link>
            </button>
            <button class="nav-button">
              <Link to="/login">Login</Link>
            </button>
            <button class="nav-button">
              <Link to="/reset">Reset</Link>
              {/* planning on deleting later */}
            </button>
            <button class="nav-button">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return <Home />;
  }
}

export default App;
