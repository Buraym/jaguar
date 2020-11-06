import React from 'react';
import '../styles/perfilstyle.css';
import ImagemPerfilExemplo from '../assets/imagem perfil exemplo.jpg';

function Perfil(){

    return(

        <div className="tela">
            <div className="coluna1">
                <img className="foto-perfil" src={ImagemPerfilExemplo} alt="Foto de Perfil"/>
                <div className="dados">
                    <label className="nome"> Nome Completo </label>
                    <label className="idade"> Idade </label>
                    <label className="status"> Status </label>
                </div>
            </div>
            <div className="coluna2">
                <div className="caixa-status"> Status </div>
                <div className="caixa-alugado"> Item alugado </div>
                <button className="editar-perfil"> Editar perfil</button>
            </div>
        </div>

    );
}

export default Perfil;