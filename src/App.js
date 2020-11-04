import './App.css';
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
          <Link to="/"> Home </Link>  
          <Link to="/Login"> Login </Link>
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
