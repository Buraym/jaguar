import React from 'react';
import '../styles/servicosstyle.css';
import SideBar from '../components/SideBar';

function Servicos(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos">
                
            </div>
        </div>
    );
}

export default Servicos;