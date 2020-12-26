import React from 'react';
import '../styles/classificadosprocurarstyle.css';
import SideBar from '../components/SideBar';
import SearchIcon from '@material-ui/icons/Search';

function ClassificadosProcurar(){

    return(
        <div className="tela-classificados">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados-procurar">
                <div className="classificados-procurar-campo">
                    <input className="classificados-procurar-input" />
                    <SearchIcon className="classificados-procurar-icone" fontSize="large"/>
                </div>
            </div>
        </div>
    );
}

export default ClassificadosProcurar;