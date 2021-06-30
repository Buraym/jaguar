import React from 'react';
import '../styles/perfilstyle.css';
import { Link } from "react-router-dom";
import ImagemPerfilExemplo from '../assets/imagem perfil exemplo.jpg';
import SideBar from '../components/SideBar';

function Perfil(){

    return(

        <div className="telaperfil">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-perfil">
                <div className="coluna1">
                    <img className="foto-de-perfil" src={ImagemPerfilExemplo} alt="Foto de Perfil"/>
                    <div className="dados-perfil">
                        <label className="nome"> Nome </label>
                        <label className="idade"> Telefone </label>
                    </div>
                </div>
                <div className="coluna2">
                    <div className="caixa-perfil-1">
                        <label> Status </label>
                    </div>
                    <div className="caixa-perfil-1">
                        <label> Item Alugado </label>
                    </div>
                    <Link to="/editar_perfil">
                        <button className="editar-perfil">
                            <label className="editar-perfil-texto"> Editar perfil </label>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Perfil;