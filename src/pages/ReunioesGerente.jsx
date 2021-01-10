import React from 'react';
import '../styles/reunioesgerentestyle.css';
import SideBar from '../components/SideBar';

function ReunioesGerente(){
    

    return(
        <div className="telareunioes">
            <div>
                <SideBar />
            </div>
            <div className="conteudo-reunioes-gerente">
                <div className="iniciar-reuniao">
                    <button className="botao-reuniao-iniciar"> Reunião Nº 4 </button>
                </div>
                <div className="reunioes-anteriores"></div>
            </div>
        </div>

    );
}

export default ReunioesGerente;