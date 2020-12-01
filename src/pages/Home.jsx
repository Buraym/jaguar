import React from 'react';
import '../styles/home.css';
import SideBar from '../components/SideBar';
import CardEvento from '../components/CardEvento';
import Foto from '../assets/foto evento adoção.jpg';
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
                    <label className="nome-usuario"> Olá, Fulana de tal </label>
                    <label className="nome-usuario"> Seja Bem-vindo </label>
                </div>
                { /*<CardEvento
                    imagem={Foto}
                    fallback="Adoção de pets"
                    nome="Feira de Adoção de animais de estimação"
                    descricao={ null }
                    local="Avenida Silvio Américo Sasdeli, 1234, perto do Subway"
                    dia="27"
                    mes="12"
                    hora="18:30"
                /> */}
            </div>
        </div>  
    );
}

export default Home;