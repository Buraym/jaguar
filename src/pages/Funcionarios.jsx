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
import DataFuncionarios from "../datafuncionarios.json"

function Funcionarios(){
    
    var lista_nome = [];
    var lista_cargo = [];
    var lista_escala = [];
    var lista_salario = [];

    const funcionarios = [DataFuncionarios].map((funcionario, nome, cargo, escala, salario) => {
        for (var i in funcionario) {
            lista_nome.push(funcionario[i].nome);
            lista_cargo.push(funcionario[i].cargo);
            lista_escala.push(funcionario[i].escala);
            lista_salario.push(funcionario[i].salario);
        }
    });

    return(
        <div className="tela-funcionarios">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios">
                <h1 className="titulo"> Equipe de Funcionarios </h1>
                <div className="secao-cards">
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={ lista_nome[0] } cargo={ lista_cargo[0] } escala={ lista_escala[0] } salario={ lista_salario[0] }/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario2} nome={ lista_nome[1] } cargo={ lista_cargo[1] } escala={ lista_escala[1] } salario={ lista_salario[1] }/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario3} nome={ lista_nome[2] } cargo={ lista_cargo[2] } escala={ lista_escala[2] } salario={ lista_salario[2] }/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario4} nome={ lista_nome[3] } cargo={ lista_cargo[3] } escala={ lista_escala[3] } salario={ lista_salario[3] }/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario5} nome={ lista_nome[4] } cargo={ lista_cargo[4] } escala={ lista_escala[4] } salario={ lista_salario[4] }/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario6} nome={ lista_nome[5] } cargo={ lista_cargo[5] } escala={ lista_escala[5] } salario={ lista_salario[5] }/>
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