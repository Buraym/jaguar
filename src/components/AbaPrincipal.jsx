import React from 'react';
import '../styles/AbaPrincipal';
import ImagemBotaoInicio from '../assets/icons/outline_home_black_18dp.png';
import ImagemBotaoPerfil from '../assets/icons/baseline_person_black_18dp.png';
import ImagemBotaoReuniões from '../assets/icons/round_cast_black_18dp.png';
import ImagemBotaoEventos from '../assets/icons/baseline_calendar_today_black_18dp.png';
import ImagemBotaoServiços from '../assets/icons/round_engineering_black_18dp.png';
import ImagemBotaoAlugados from '../assets/icons/round_published_with_changes_black_18dp.png';
import ImagemBotaoLogout from '../assets/icons/baseline_exit_to_app_black_18dp.png';

function AbaPrincipal(props) {

    return (

        <>

            <div className="painel_preto">
                    
                <button className="b_inicial" >
                    
                    <img className="icone_inicio" src={ImagemBotaoInicio} />
                        
                    <label className="inicio" > Inicio </label>
                    
                </button>
                    
                <button className="b_perfil">
                    
                    <img className="icone_perfil" src={ImagemBotaoPerfil} />
                        
                    <label className="perfil" > Perfil </label>
                        
                </button>
                    
                <button className="b_reunioes" >
                    
                        
                    <img className="icone_reunioes" src={ImagemBotaoReuniões} />
                        
                    <label className="reunioes" > Reuniões </label>

                </button>
                    
                <button className="b_eventos" > 
                    
                    <img className="icone_eventos" src={ImagemBotaoEventos} />
                        
                    <label className="eventos" > Eventos </label>
                    
                </button>
                    
                <button className="b_servicos" >
                    
                    <img className="icone_servicos" src={ImagemBotaoServiços} />
                        
                    <label className="servicos" > Serviços </label>
                    
                </button>
                    
                <button className="b_alugados" > 
                    
                    <img className="icone_alugados" src={ImagemBotaoAlugados} />
                        
                    <label className="alugados" > Alugados </label>
                    
                </button>
                    
                <button className="b_logout" >
                    
                    <img className="icone_logout" src={ImagemBotaoLogout} />
                        
                    <label className="logout" > Logout </label>
                    
                </button>
                
            </div>

        </>  
      
    );

}

export default AbaPrincipal;