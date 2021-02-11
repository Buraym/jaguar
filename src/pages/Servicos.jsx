import React from 'react';
import '../styles/servicosstyle.css';
import SideBar from '../components/SideBar';
import {Link} from "react-router-dom";
import EcoIcon from '@material-ui/icons/Eco';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import HouseIcon from '@material-ui/icons/House';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


function Servicos(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos">
                <h1> Serviços </h1>
                <Link to="/servicosdejardinagem">
                    <button className="botao-servicos-jardinaria">
                        <label className="servico-texto-jardinaria">Jardinaria</label>
                        <EcoIcon className="servico-icone-jardinaria" fontSize="large"/>
                    </button>
                </Link>
                <Link to="/servicosdeencanamento">
                    <button className="botao-servicos-encanamento">
                        <label className="servico-texto-encanamento">Encanamento</label>
                        <BuildSharpIcon className="servico-icone-encanamento" fontSize="large"/>
                    </button>
                </Link>
                <Link to="/servicosdeempregada">
                    <button className="botao-servicos-empregada">
                        <label className="servico-texto-empregada">Empregada</label>
                        <HouseIcon className="servico-icone-empregada" fontSize="large"/>
                    </button>
                </Link>
                <Link to="/servicosdebaba">
                    <button className="botao-servicos-baba">
                        <label className="servico-texto-baba">Babá</label>
                        <ChildFriendlyIcon className="servico-icone-baba" fontSize="large"/>
                    </button>
                </Link>
                <Link to="/servicosdecozinha">
                    <button className="botao-servicos-cozinheiro">
                        <label className="servico-texto-cozinheiro">Cozinheiro</label>
                        <FastfoodSharpIcon className="servico-icone-cozinheiro" fontSize="large"/>
                    </button>
                </Link>
                <Link to="/procurarservicos">
                    <button className="botao-servicos-procurar">
                        <label className="servico-texto-procurar">Procurar Serviço</label>
                        <SearchIcon className="servico-icone-procurar" fontSize="large"/>
                    </button>
                </Link>
                <Link to="/sugerirservico">
                    <button className="botao-servicos-sugerir">
                        <label className="servico-texto-sugerir">Sugerir Serviço</label>
                        <PersonAddIcon className="servico-icone-sugerir" fontSize="large"/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Servicos;