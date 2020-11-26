import React from 'react';
import '../styles/chatstyle.css';
import Foto from '../assets/imagem perfil exemplo.jpg';

function Chat(props){

    return(
        <div className="campo-chat">
            <div className="campo-pessoa">
                <img className="foto" src={Foto} alt="foto de uma pessoa que falou algo"/>
                <label className="pessoa"> {props.pessoa} </label>
            </div>
            <div className="campo-texto">
                <p> {props.texto} </p>
            </div>
        </div>
    );
}

export default Chat;