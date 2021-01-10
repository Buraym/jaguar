import React from 'react';
import '../styles/administracaostyle.css';
import SideBar from '../components/SideBar';

function AdministracaoCondominos(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao-condominos">
                
            </div>
        </div>
    );
}

export default AdministracaoCondominos;