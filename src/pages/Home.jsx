import React from 'react';
import '../styles/home.css';
import AbaPrincipal from '../components/AbaPrincipal';

function Home() {

    return (
        <div className="tela">
            <div className="aba-principal">
                <AbaPrincipal />
            </div>
            <div className="conteudo-pagina">
            </div>
        </div>  
    );
}

export default Home;