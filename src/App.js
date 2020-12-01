import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/EditarPerfil';
import Reunioes from './pages/Reunioes';
import Servicos from './pages/Servicos';
import Funcionarios from './pages/Funcionarios';
import Contabilidade from './pages/Contabilidade';

function App() {

  return (

      <Router>
        <div>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/editar_perfil" component={EditarPerfil} />
            <Route path="/reunioes" component={Reunioes} />
            <Route path="/servicos" component={Servicos} />
            <Route path="/funcionarios" component={Funcionarios} />
            <Route path="/contabilidade" component={Contabilidade} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
