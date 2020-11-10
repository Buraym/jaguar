import React from 'react';
import '../styles/reunioesstyle.css';
import FotoSindico from '../assets/foto sindico.jpg';

function Reunioes(){

    return(
        <div className="tela">
            <div className="coluna1">
                <div className="painel-apresentador">
                    <img className="foto-apresentador" src={FotoSindico}/>
                    <label className="nome-apresentador"> Nome do apresentador </label>
                </div>
                <div className="painel-botoes">
                    <button className="microfone">
                        <img className="foto-apresentador"/>
                    </button>
                    <button className="microfone">
                        <img className="foto-apresentador"/>
                    </button>
                </div>
            </div>
            <div className="coluna2">
                <label className="titulo-reuniao"> Reunião Nº 35 dos sindícos </label>
                <div>
                    <label className="chat1"> Olá moradores, daqui a pouco iniciaremos a Reunião </label>
                    <label className="chat1"> Olá moradores, daqui a pouco iniciaremos a Reunião </label>
                </div>
            </div>
        </div>

    );
}

export default Reunioes;