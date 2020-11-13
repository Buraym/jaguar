import React from 'react'
import '../Barra/barra.css'
import ima from '../img/imagem_perfil_exemplo.jpg'

function Barra () {
    return (
    <div className="painel_minimizado">
		
        <img className="imagem_usuario_minimizado" src={ima} alt="Imagem" />
    
        <div className="triangulo"></div>

    </div>
    
    );
}
export default Barra;