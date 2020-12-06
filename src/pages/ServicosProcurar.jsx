import React from 'react';
import '../styles/servicoprocurarstyle.css';
import SideBar from '../components/SideBar';

function ServicosProcurar(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-procurar">
                
            </div>
        </div>
    );
}

export default ServicosProcurar;