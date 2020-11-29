import React from 'react';
import '../styles/funcionariosstyle.css';
import SideBar from '../components/SideBar';

function Funcionarios(){

    return(
        <div className="tela-funcionarios">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios">
                <h1 className="titulo"> Equipe de Funcionarios </h1>
                <div className="secao-cards">

                </div>
            </div>
        </div>
    );
}

export default Funcionarios;