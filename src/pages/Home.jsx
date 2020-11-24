import React from 'react';
import style from '../styles/home.css';
import SideBar from '../components/SideBar';
import Notificacao from '../components/Notificacao';

function Home() {

    return (
        <div className="tela">
            <div className="aba-principal">
                <SideBar />
            </div>
            <div className="conteudo-pagina">
                <Notificacao />
            </div>
        </div>  
    );
}

export default Home;