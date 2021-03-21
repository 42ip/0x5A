import { Switch, BrowserRouter as Router, Link , Route} from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
function App() {
  return (
    <Router>
    <div className="App">
    <nav>
              <button class="nav-button appname">
                  <Link to="/">APPNAME</Link>
              </button>
              <button class="nav-button">
                <Link to="/">Sign Out</Link>
              </button> 
              <button class="nav-button">
                <Link to="/">Settings</Link>
              </button>
     </nav>
              <Switch>
              <Route path="/">
                    <Home />
                </Route>
              </Switch>
    </div>
    </Router>
  );
}

export default App;
