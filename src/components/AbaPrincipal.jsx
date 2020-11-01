import React from 'react';
import '../styles/AbaPrincipal';

function AbaPrincipal(props) {

    return (

        <>

            <div id="painel_preto">
                    
                <button id="b_inicial" >
                    
                    <img id="icone_inicio" src="" />
                        
                    <label id="inicio" > Inicio </label>
                    
                </button>
                    
                <button id="b_perfil">
                    
                    <img id="icone_perfil" src="" />
                        
                    <label id="perfil" > Perfil </label>
                        
                </button>
                    
                <button id="b_reunioes" >
                    
                        
                    <img id="icone_reunioes" src="" />
                        
                    <label id="reunioes" > Reuniões </label>

                </button>
                    
                <button id="b_eventos" > 
                    
                    <img id="icone_eventos" src="" />
                        
                    <label id="eventos" > Eventos </label>
                    
                </button>
                    
                <button id="b_servicos" >
                    
                    <img id="icone_servicos" src="" />
                        
                    <label id="servicos" > Serviços </label>
                    
                </button>
                    
                <button id="b_alugados" > 
                    
                    <img id="icone_alugados" src="" />
                        
                    <label id="alugados" > Alugados </label>
                    
                </button>
                    
                <button id="b_logout" >
                    
                    <img id="icone_logout" src="" />
                        
                    <label id="logout" > Logout </label>
                    
                </button>
                
            </div>

        </>  
      
    );

}

export default AbaPrincipal;