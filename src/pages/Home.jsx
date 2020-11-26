import React from 'react';
import '../styles/home.css';
import SideBar from '../components/SideBar';
import CardEvento from '../components/CardEvento';
import Foto from '../assets/foto evento adoção.jpg';

function Home() {

    return (
        <div className="tela">
            <div className="aba-principal">
                <SideBar />
            </div>
            <div className="conteudo-pagina">
                <CardEvento
                    imagem={Foto}
                    fallback="Adoção de pets"
                    nome="Feira de Adoção de animais de estimação"
                    descricao={ null }
                    local="Avenida Silvio Américo Sasdeli, 1234, perto do Subway"
                    dia="27"
                    mes="12"
                    hora="18:30"
                />
            </div>
        </div>  
    );
}

export default Home;