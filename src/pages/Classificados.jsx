import React from 'react';
import '../styles/classificadosstyle.css';
import SideBar from '../components/SideBar';

function Classificados(){

    return(
        <div className="tela-classificados">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados">
                
            </div>
        </div>
    );
}

export default Classificados;