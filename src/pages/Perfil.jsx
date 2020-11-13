import React from 'react';
import '../styles/perfilstyle.css';
import AbaPrincipal from '../components/AbaPrincipal.jsx';
import ImagemPerfilExemplo from '../assets/imagem perfil exemplo.jpg';

function Perfil(){

    return(

        <div className="tela">
            <div classname="aba">
                <AbaPrincipal />
            </div>
            <div className="tela-perfil">
                <div className="coluna1">
                    <img className="foto-perfil" src={ImagemPerfilExemplo} alt="Foto de Perfil"/>
                    <div className="dados">
                        <label className="nome"> Nome Completo </label>
                        <label className="idade"> Idade </label>
                        <label className="status"> Morador </label>
                    </div>
                </div>
                <div className="coluna2">
                    <div className="caixa-status">
                        <label> Status </label>
                    </div>
                    <div className="caixa-alugado">
                        <label> Item Alugado </label>
                    </div>
                    <button className="editar-perfil"> Editar perfil</button>
                </div>
            </div>
        </div>

    );
}

export default Perfil;