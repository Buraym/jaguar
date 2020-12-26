import React, { useState } from 'react';
import '../styles/reunioesstyle.css';
import FotoSindico from '../assets/foto sindico.jpg';
import Postar from '../assets/icons/round_check_circle_outline_black_18dp.png';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import Chat from '../components/Chat';
import SideBar from '../components/SideBar';

function Reunioes(){
    var [texto, setTexto] = useState("");
    var isFocused = true;

    var chat_texto = {
        nome: "teste",
        conteudo: texto
    }

    function handleSubmit(event){
        chat_texto.conteudo = texto;
        var isFocused = true;
        console.log(isFocused);
        event.preventDefault();
    }

    function handleChange(e){
        setTexto(e.target.value);
    }

    return(
        <div className="telareunioes">
            <div>
                <SideBar />
            </div>
            <div className="camada1r">
                <div className="painel-apresentador">
                    <div className="quadro-apresentador">
                        <img className="foto-apresentador" src={FotoSindico} alt="foto do sindico"/>
                        <label className="nome-apresentador"> Nome do apresentador </label>
                    </div>
                </div>
                <div className="painel-botoes">
                    <button className="microfone">
                        <MicIcon className="icone-reunioes-mic"/>
                    </button>
                    <button className="camera">
                        <VideocamIcon className="icone-reunioes-camera"/>
                    </button>
                </div>
            </div>
            <div className="camada2r">
                <div className="caixa-input">
                    <div className="caixa-titulo">
                        <label className="titulo-reuniao"> Reunião Nº 35 dos sindícos </label>
                    </div>
                    <div className="caixa-chat">
                        <Chat
                            pessoa="Mariana"
                            texto="Boa noite, sejam bem-vindos á reunião com os sindicos deste mês"
                        />
                        <Chat
                            pessoa="Juliana"
                            texto="Boa noite"
                        />
                        <Chat
                            pessoa="Claúdia"
                            texto="Boa noite !!! por acaso a pauta de som á meia noite será votada hoje ?"
                        />
                        <Chat
                            pessoa="Mariana"
                            texto="Sim Claúdia, essa será a quinta pauta dessa reunião"
                        />
                    </div>
                    <div className="caixa-texto-input">
                        <form className="caixa-texto-input" onSubmit={handleSubmit}>
                            <input type="text" className="input-texto" value={texto} onChange={handleChange}/>
                            <button className="submit" src={Postar} >
                                <CheckCircleOutlineIcon className="botao-submit-reunioes" fontSize="medium"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Reunioes;