import React from "react";
import '../styles/eventosstyle.css';
import SideBar from '../components/SideBar';
import CarroselEventos from '../components/CarroselEventos';

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