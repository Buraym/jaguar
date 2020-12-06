import React from 'react';
import '../styles/home.css';
import SideBar from '../components/SideBar';
import FotoPerfil from '../assets/imagem perfil exemplo.jpg';

function Home() {

    return (
        <div className="tela">
            <div className="aba-principal">
                <SideBar />
            </div>
            <div className="conteudo-pagina">
                <div className="painel-animacao">
                    <img className="foto-usuario" src={FotoPerfil} alt="Foto do perfil" />
                    <label> Olá, Fulana de tal </label>
                    <label> Seja Bem-vindo </label>
                </div>
            </div>
        </div>  
    );
}

export default Home;