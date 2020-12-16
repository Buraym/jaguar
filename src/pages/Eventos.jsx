import React from "react";
import '../styles/eventosstyle.css';
import SideBar from '../components/SideBar';
import CarroselEventos from '../components/CarroselEventos';
import CardEvento from '../components/CardEvento';
import Foto from '../assets/foto evento adoção.jpg';
import Foto2 from '../assets/ano novo.jpg';
import Foto3 from '../assets/casamento.jpg';
import Foto4 from '../assets/festa.jpg';

function Eventos(){

    return(
        <div className="tela-evento">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-evento">
                <div>
                    <h1> Eventos </h1>
                </div>
                <div className="secao-cards-eventos">
                    <CarroselEventos />
                </div>
            </div>
        </div>
    );
}

export default Eventos;