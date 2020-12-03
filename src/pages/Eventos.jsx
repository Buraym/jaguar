import React from 'react';
import '../styles/eventosstyle.css';
import SideBar from '../components/SideBar';
import CardEvento from '../components/CardEvento';
import Foto from '../assets/foto evento adoção.jpg';

function Eventos(){

    return(
        <div className="tela-evento">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-evento">
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

export default Eventos;