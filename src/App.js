import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EsqueceuSenha from './pages/EsqueceuSenha';

import Home from './pages/Home';
import HomeGerente from './pages/HomeGerente';

import Error404 from './pages/Error404';

import Perfil from './pages/Perfil';
import EditarPerfil from './pages/EditarPerfil';

import Reunioes from './pages/Reunioes';
import ReunioesGerente from './pages/ReunioesGerente';

import Eventos from './pages/Eventos';

import Servicos from './pages/Servicos';
import ServicosJardinaria from './pages/ServicosJardinaria';
import ServicosEncanamento from './pages/ServicosEncanamento';
import ServicosEmpregada from './pages/ServicosEmpregada';
import ServicosBaba from './pages/ServicosBaba';
import ServicosCozinheiro from './pages/ServicosCozinheiro';
import ServicosProcurar from './pages/ServicosProcurar';
import ServicosSugerir from './pages/ServicosSugerir';
import ServicosGerente from './pages/ServicosGerente';

import Classificados from './pages/Classificados';
import ClassificadosUtensilios from './pages/ClassificadosUtensilios';
import ClassificadosLimpeza from './pages/ClassificadosLimpeza';
import ClassificadosEstacionamento from './pages/ClassificadosEstacionamento';
import ClassificadosMoveis from './pages/ClassificadosMoveis';
import ClassificadosProcurar from './pages/ClassificadosProcurar';
import ClassificadosSugerir from './pages/ClassificadosSugerir';

import Funcionarios from './pages/Funcionarios';
import FuncionariosEscalas from './pages/FuncionariosEscalas';

import Administracao from './pages/Administracao';
import AdministracaoCondominos from './pages/AdministracaoCondominos';
import AdministracaoMoradores from './pages/AdministracaoMoradores';
import AdministracaoObrasRealizadas from './pages/AdministracaoObrasRealizadas';
import AdministracaoObrasAndamento from './pages/AdministracaoObrasAndamento';
import AdministracaoObrasProjetos from './pages/AdministracaoObrasProjetos';

function App() {

  return (

      <Router>
        <div>
          <Switch>
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/esqueceusenha" component={EsqueceuSenha} />

            <Route path="/home" component={Home} />
            <Route path="/homegerente" component={HomeGerente} />

            <Route path="/perfil" component={Perfil} />
            <Route path="/editar_perfil" component={EditarPerfil} />

            <Route path="/reunioes" component={Reunioes} />
            <Route path="/reunioesgerente" component={ReunioesGerente} />

            <Route path="/eventos" component={Eventos} />

            <Route path="/servicos" component={Servicos} />
            <Route path="/servicogerente" component={ServicosGerente} />
            <Route path="/servicosdejardinagem" component={ServicosJardinaria} />
            <Route path="/servicosdeencanamento" component={ServicosEncanamento} />
            <Route path="/servicosdeempregada" component={ServicosEmpregada} />
            <Route path="/servicosdebaba" component={ServicosBaba} />
            <Route path="/servicosdecozinha" component={ServicosCozinheiro} />
            <Route path="/procurarservicos" component={ServicosProcurar} />
            <Route path="/sugerirservico" component={ServicosSugerir} />

            <Route path="/classificados" component={Classificados} />
            <Route path="/classificadosdeutensilios" component={ClassificadosUtensilios} />
            <Route path="/classificadosdemaquinasdelimpeza" component={ClassificadosLimpeza} />
            <Route path="/classificadosdevagasdeestacionamento" component={ClassificadosEstacionamento} />
            <Route path="/classificadosdemoveis" component={ClassificadosMoveis} />
            <Route path="/procurarclassificados" component={ClassificadosProcurar} />
            <Route path="/sugerirclassificados" component={ClassificadosSugerir} />

            <Route path="/funcionarios" component={Funcionarios} />
            <Route path="/escalasdosfuncionarios" component={FuncionariosEscalas} />

            <Route path="/administracao" component={Administracao} />
            <Route path="/administracaodemoradores" component={AdministracaoMoradores} />
            <Route path="/administracaodecondominos" component={AdministracaoCondominos} />
            <Route path="/administracaodeobrasrealizadas" component={AdministracaoObrasRealizadas} />
            <Route path="/administracaodeobrasemandamento" component={AdministracaoObrasAndamento} />
            <Route path="/administracaodeprojetosdeobras" component={AdministracaoObrasProjetos} />

            <Route path="/" exact component={Login} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
