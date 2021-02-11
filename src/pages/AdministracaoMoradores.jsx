import React from 'react';
import '../styles/administracaostyle.css';
import CardUsuario from '../components/CardUsuario';
import SideBar from '../components/SideBar';

function AdministracaoMoradores(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao">
                <h1>
                    Moradores
                </h1>
                {/*<CardUsuario tipo="card" nome="Exemplo" cargo="gerente" status="exemplo" alugado="exemplo"/>*/}
            </div>
        </div>
    );
}

export default AdministracaoMoradores;