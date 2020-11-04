import './App.css';
import CampoLoginSenha from './components/CampoLoginSenha';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  return (

      <Router>

            <div>

              <nav>

                <ul>

                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Login"> Login </Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/Login">
                  <Login />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>

          </Router>

  );

}

export default App;
