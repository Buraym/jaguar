import React from 'react';
import '../styles/home.css';
import AbaPrincipal from '../components/AbaPrincipal';

function Home(props) {

    var condicao = true;
    
    function RenderizarTrue(){
        return <h1> TRUE </h1>
    }

    function RenderizarFalse(){
        return <h1> False </h1>
    }

    function Renderizar(){
        if (condicao) {
            <RenderizarTrue />
        } else {
            <RenderizarFalse />
        }
    }

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