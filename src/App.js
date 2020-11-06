import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Reunioes from './pages/Reunioes';

function App() {

  return (

      <Router>
        <div>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <Reunioes />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
