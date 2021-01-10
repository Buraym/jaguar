import React from 'react';
import '../styles/administracaostyle.css';
import SideBar from '../components/SideBar';

function AdministracaoMoradores(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao-moradores">
                
            </div>
        </div>
    );
}

export default AdministracaoMoradores;