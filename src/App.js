import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/EditarPerfil';
import Reunioes from './pages/Reunioes';

function App() {

  return (

      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/editar_perfil" component={EditarPerfil} />
            <Route path="/reunioes" component={Reunioes} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
