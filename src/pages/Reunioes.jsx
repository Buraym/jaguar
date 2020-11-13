import React from 'react';
import '../styles/reunioesstyle.css';
import AbaPrincipal from '../components/AbaPrincipal.jsx';
import FotoSindico from '../assets/foto sindico.jpg';
import IconeMicrofone from '../assets/icons/baseline_mic_black_18dp.png';
import IconeCamera from '../assets/icons/baseline_videocam_black_18dp.png';
import Chat from '../components/Chat';

function Reunioes(){

    return(
        <div className="tela">
            <div>
                <AbaPrincipal />
            </div>
            <div className="coluna1">
                <div className="painel-apresentador">
                    <div className="quadro-apresentador">
                        <img className="foto-apresentador" src={FotoSindico} alt="foto do sindico"/>
                        <label className="nome-apresentador"> Nome do apresentador </label>
                    </div>
                </div>
                <div className="painel-botoes">
                    <button className="microfone">
                        <img className="icone-mic" src={IconeMicrofone} alt="icone do botao de microfone"/>
                    </button>
                    <button className="camera">
                        <img className="icone-camera" src={IconeCamera} alt="icone do botao de tela"/>
                    </button>
                </div>
            </div>
            <div className="coluna2">
                <div className="caixa-titulo">
                    <label className="titulo-reuniao"> Reunião Nº 35 dos sindícos </label>
                </div>
                <div className="caixa-chat">
                    <Chat pessoa="Vassi" texto="Olá pessoal, aqui é a Vassi" />
                    <Chat pessoa="Mariana" texto="Olá Vassi !!!" />
                </div>
                <input className="caixa-texto-input"/>
            </div>
        </div>

    );
}

export default Reunioes;