import React from 'react';
import '../styles/funcionariosstyle.css';
import SideBar from '../components/SideBar';
import CardFuncionario from '../components/CardFuncionario';
import FundoFuncionario from '../assets/imagem de fundo funcionario.jpg';
import FotoExemploFuncionario from '../assets/foto funcionario exemplo.jpg';
import FotoExemploFuncionario2 from '../assets/foto funcionario exemplo 2.jpg';
import FotoExemploFuncionario3 from '../assets/foto funcionario exemplo 3.jpg';
import FotoExemploFuncionario4 from '../assets/foto funcionario exemplo 4.jpg';
import FotoExemploFuncionario5 from '../assets/foto funcionario exemplo 5.jpg';
import FotoExemploFuncionario6 from '../assets/foto funcionario exemplo 6.jpg';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import DataFuncionarios from "../data.json"

function Funcionarios(){

    /*const funcionarios = [data_funcionarios].map((funcionarios) => {
        const funcionario1 = funcionarios[0];
        const funcionario2 = funcionarios[1];
        const funcionario3 = funcionarios[2];
        const funcionario4 = funcionarios[3];
        const funcionario5 = funcionarios[4];
        const funcionario6 = funcionarios[5];
        console.log(funcionario1.id + " " + funcionario1.nome);
    });*/

    const funcionario1 = DataFuncionarios[0];
    var nome1 = funcionario1.nome + " " + funcionario1.sobrenome;
    var cargo1 = funcionario1.cargo;
    var escala1 = funcionario1.escala;
    var salario1 = "R$ " + funcionario1.salario;
    
    const funcionario2 = DataFuncionarios[1];
    var nome2 = funcionario2.nome + " " + funcionario2.sobrenome;
    var cargo2 = funcionario2.cargo;
    var escala2 = funcionario2.escala;
    var salario2 = "R$ " + funcionario2.salario;

    const funcionario3 = DataFuncionarios[2];
    var nome3 = funcionario3.nome + " " + funcionario3.sobrenome;
    var cargo3 = funcionario3.cargo;
    var escala3 = funcionario3.escala;
    var salario3 = "R$ " + funcionario3.salario;

    const funcionario4 = DataFuncionarios[3];
    var nome4 = funcionario4.nome + " " + funcionario4.sobrenome;
    var cargo4 = funcionario4.cargo;
    var escala4 = funcionario4.escala;
    var salario4 = "R$ " + funcionario4.salario;

    const funcionario5 = DataFuncionarios[4];
    var nome5 = funcionario5.nome + " " + funcionario5.sobrenome;
    var cargo5 = funcionario5.cargo;
    var escala5 = funcionario5.escala;
    var salario5 = "R$ " + funcionario5.salario;

    const funcionario6 = DataFuncionarios[5];
    var nome6 = funcionario6.nome + " " + funcionario6.sobrenome;
    var cargo6 = funcionario6.cargo;
    var escala6 = funcionario6.escala;
    var salario6 = "R$ " + funcionario6.salario;

    return(
        <div className="tela-funcionarios">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios">
                <h1 className="titulo"> Equipe de Funcionarios </h1>
                <div className="secao-cards">
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={ nome1 } cargo={ cargo1 } escala={ escala1 } salario={ salario1}/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario2} nome={ nome2 } cargo={ cargo2 } escala={ escala2 } salario={ salario2}/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario3} nome={ nome3 } cargo={ cargo3 } escala={ escala3 } salario={ salario3}/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario4} nome={ nome4 } cargo={ cargo4 } escala={ escala4 } salario={ salario4}/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario5} nome={ nome5 } cargo={ cargo5 } escala={ escala5 } salario={ salario5}/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario6} nome={ nome6 } cargo={ cargo6 } escala={ escala6 } salario={ salario6}/>          
                    <div className="cardfuncionario">
                        <div className="funcionario-fundo-adicionar"></div>
                            <AccountCircleRoundedIcon style={{ fontSize: 60 }} />
                        <div className="caixa-acoes">
                            <button className="adicionar">
                                <PersonAddRoundedIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Funcionarios;