import React, { useState } from 'react';
import '../styles/administracaostyle.css';
import SideBar from '../components/SideBar';
import {Link} from "react-router-dom";
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

function Administracao(){

    const [popRelatorios, setPopRelatorios] = useState(false);
    const [popMoradores, setPopMoradores] = useState(false);
    const [popObras, setPopObras] = useState(false);

    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar status="gerente"/>
            </div>
            <div className="conteudo-administracao">
                <h1> Administração </h1>
                <div className="administracao-relatorios">
                    <button className="administracao-botao" onClick={ () => (setPopRelatorios(!popRelatorios)) }>
                        Relatórios
                        <ListAltIcon />
                    </button>
                </div>
                {
                        popRelatorios ?
                            (<div className="administracao-relatorios-pop">
                                <button className="administracao-botao-pop"> Relatórios de Inadimplência </button>
                                <button className="administracao-botao-pop"> Relatórios dos Moradores </button>
                                <button className="administracao-botao-pop"> Relatórios dos Condôminos </button>
                                <button className="administracao-botao-pop"> Relatórios das Advertências </button>
                                <button className="administracao-botao-pop"> Relatórios das Multas </button>
                                <button className="administracao-botao-pop"> Relatórios dos Funcionários </button>
                                <button className="administracao-botao-pop"> Relatórios das Obras </button>
                            </div>)
                        : null
                }
                <div className="administracao-moradores">
                    <button className="administracao-botao" onClick={ () => (setPopMoradores(!popMoradores)) }>
                        Moradores e Condôminos
                        <PersonOutlineIcon />
                    </button>
                </div>
                {
                        popMoradores ?
                            (<div className="administracao-relatorios-pop">
                                <Link to="/administracaodemoradores">
                                    <button className="administracao-botao-pop"> Usuarios Moradores </button>
                                </Link>
                                <Link to="administracaodecondominos">
                                    <button className="administracao-botao-pop"> Usuarios Condôminos </button>
                                </Link>
                            </div>)
                        : null
                }
                <div className="administracao-obras">
                    <button className="administracao-botao" onClick={ () => (setPopObras(!popObras)) }>
                        Administraçao de Obras
                        <AccountBalanceIcon />
                    </button>
                </div>
                {
                        popObras ?
                            (<div className="administracao-relatorios-pop">
                                <Link to="/administracaodeobrasrealizadas">
                                    <button className="administracao-botao-pop"> Obras Realizadas </button>
                                </Link>
                                <Link to="/administracaodeobrasemandamento">
                                    <button className="administracao-botao-pop"> Obras em Andamento</button>
                                </Link>
                                <Link to="/administracaodeprojetosdeobras">
                                    <button className="administracao-botao-pop"> Projetos de Obras </button>
                                </Link>
                            </div>)
                        : null
                }
            </div>
        </div>
    );
}

export default Administracao;