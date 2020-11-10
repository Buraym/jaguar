import React from 'react';
import '../styles/abaprincipalstyle.css';
import {Link} from "react-router-dom";
import ImagemBotaoInicio from '../assets/icons/outline_home_black_18dp.png';
import ImagemBotaoPerfil from '../assets/icons/baseline_person_black_18dp.png';
import ImagemBotaoReuniões from '../assets/icons/round_cast_black_18dp.png';
import ImagemBotaoEventos from '../assets/icons/baseline_calendar_today_black_18dp.png';
import ImagemBotaoServiços from '../assets/icons/round_engineering_black_18dp.png';
import ImagemBotaoAlugados from '../assets/icons/round_published_with_changes_black_18dp.png';
import ImagemBotaoLogout from '../assets/icons/baseline_exit_to_app_black_18dp.png';

function AbaPrincipal(props) {
    var status = status;

    function trocarAnimacao(){
        if (status == false){
            status = true;
        } else {
            status = false;
        }

        return(
            console.log(status)
        );
    }

    return (
        <>
            <div className="painel_preto">
                <div className="botoes_paginas">

                    <Link to="/">
                        <button className="b_inicial" >
                            <img className="icone_inicio" src={ImagemBotaoInicio} alt="Botao da pagina inicial"/>
                            <label className="inicio" > Inicio </label>
                        </button>
                    </Link>
                    <button className="b_perfil">
                        <img className="icone_perfil" src={ImagemBotaoPerfil} alt="Botao da pagina Perfil"/>
                        <label className="perfil" > Perfil </label>
                    </button>
                    <button className="b_reunioes" >
                            <img className="icone_reunioes" src={ImagemBotaoReuniões} alt="Botao da pagina de Reunioes"/>
                            <label className="reunioes" > Reuniões </label>
                        </button>
                        <button className="b_eventos" > 
                        <img className="icone_eventos" src={ImagemBotaoEventos} alt="Botao da pagina Eventos"/>  
                        <label className="eventos" > Eventos </label>
                    </button>
                    <button className="b_servicos" >
                        <img className="icone_servicos" src={ImagemBotaoServiços} alt="Botao da pagina Serviços"/>
                        <label className="servicos" > Serviços </label>
                    </button>
                    <button className="b_alugados" > 
                        <img className="icone_alugados" src={ImagemBotaoAlugados} alt="Botao da pagina Alugados"/>   
                        <label className="alugados" > Alugados </label>
                    </button>
                    <Link to="/Login">
                        <button className="b_logout" >   
                            <img className="icone_logout" src={ImagemBotaoLogout} alt="Botao de Logout"/>   
                            <label className="logout" > Logout </label>
                        </button>
                    </Link>
                    <button className="triangulo" onClick={trocarAnimacao}></button>
                </div>
            </div>
        </>  
    );
}

export default AbaPrincipal;