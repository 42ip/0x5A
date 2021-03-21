import './App.css';
import Userfront from "@userfront/react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './auth/Login';

Userfront.init(process.env.REACT_APP_id);

function App() {
    return (
    <Router>
    <div className="App">
          <nav>
              {/* <button>
                  <Link to="/sign-up">Sign up</Link>
              </button> */}
              <button>
                  <Link to="/login">Login</Link>
              </button>
          </nav>
            <Switch>
              <Route path="/login">
                  <Login />
              </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
