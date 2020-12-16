import React from 'react';
import '../styles/servicoprocurarstyle.css';
import SideBar from '../components/SideBar';
import SearchIcon from '@material-ui/icons/Search';

function ServicosProcurar(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-procurar">
                <div className="servicos-procurar-campo">
                    <input className="servicos-procurar-input" />
                    <SearchIcon className="servicos-procurar-icone" fontSize="large"/>
                </div>
            </div>
        </div>
    );
}

export default ServicosProcurar;