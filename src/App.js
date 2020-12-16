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

import Eventos from './pages/Eventos';

import Servicos from './pages/Servicos';
import ServicosJardinaria from './pages/ServicosJardinaria';
import ServicosEncanamento from './pages/ServicosEncanamento';
import ServicosEmpregada from './pages/ServicosEmpregada';
import ServicosBaba from './pages/ServicosBaba';
import ServicosCozinheiro from './pages/ServicosCozinheiro';
import ServicosProcurar from './pages/ServicosProcurar';
import ServicosSugerir from './pages/ServicosSugerir';

import Classificados from './pages/Classificados';

import Funcionarios from './pages/Funcionarios';
import FuncionariosEscalas from './pages/FuncionariosEscalas';

import Contabilidade from './pages/Contabilidade';

import PublicarAvisos from './pages/PublicarAvisos'

function App() {

  return (

      <Router>
        <div>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/editar_perfil" component={EditarPerfil} />
            <Route path="/reunioes" component={Reunioes} />
            <Route path="/eventos" component={Eventos} />

            <Route path="/servicos" component={Servicos} />
            <Route path="/servicosdejardinagem" component={ServicosJardinaria} />
            <Route path="/servicosdeencanamento" component={ServicosEncanamento} />
            <Route path="/servicosdeempregada" component={ServicosEmpregada} />
            <Route path="/servicosdebaba" component={ServicosBaba} />
            <Route path="/servicosdecozinha" component={ServicosCozinheiro} />
            <Route path="/procurarservicos" component={ServicosProcurar} />
            <Route path="/sugerirservicos" component={ServicosSugerir} />

            <Route path="/classificados" component={Classificados} />
            <Route path="/funcionarios" component={Funcionarios} />
            <Route path="/escalasdosfuncionarios" component={FuncionariosEscalas} />
            <Route path="/contabilidade" component={Contabilidade} />
            <Route path="/publicar-avisos" component={PublicarAvisos} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
