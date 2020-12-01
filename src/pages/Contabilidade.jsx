import React from 'react';
import '../styles/contabilidadestyle.css';
import SideBar from '../components/SideBar';

function Contabilidade(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-contabilidade">

            </div>
        </div>
    );
}

export default Contabilidade;