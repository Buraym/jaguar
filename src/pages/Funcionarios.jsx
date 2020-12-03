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

function Funcionarios(){

    return(
        <div className="tela-funcionarios">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios">
                <h1 className="titulo"> Equipe de Funcionarios </h1>
                <div className="secao-cards">
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome="Samantha" cargo="Sindica" escala="Diurno"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario2} nome="Sergio Cabral" cargo="Contabilidade" escala="Estagiario" salario="3000"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario3} nome="Maria Helena" cargo="Gerente" escala="Noturno" salario="3500"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario4} nome="Otavio Sandiego" cargo="Socio" escala="Diurno" salario="7000"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario5} nome="Felipe Chaves" cargo="Arquiteto" escala="Diurno" salario="3000"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario6} nome="Suzana Pires" cargo="Porteira" escala="Noturno" salario="3500"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome="Samantha" cargo="Sindica" escala="Diurno"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario2} nome="Sergio Cabral" cargo="Contabilidade" escala="Estagiario" salario="3000"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario3} nome="Maria Helena" cargo="Gerente" escala="Noturno" salario="3500"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario4} nome="Otavio Sandiego" cargo="Socio" escala="Diurno" salario="7000"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario5} nome="Felipe Chaves" cargo="Arquiteto" escala="Diurno" salario="3000"/>
                    <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario6} nome="Suzana Pires" cargo="Porteira" escala="Noturno" salario="3500"/>          
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