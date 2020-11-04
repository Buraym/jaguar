import React from 'react';
import AbaPrincipal from '../components/AbaPrincipal';

function Home() {
    
    const status = false;

    function handleClick(){
        console.log(status);
    }

    return (
        <div className="">
            <div className="aba-principal">
                <AbaPrincipal />
            </div>
            <div className="conteudo-pagina">
                <button onClick={handleClick}> abcdefgh </button>
            </div>
        </div>  
    );
}

export default Home;