import React, { useState } from 'react';
import '../styles/administracaostyle.css';
import SideBar from '../components/SideBar';

function Administracao(){

    const [popRelatorios, setPopRelatorios] = useState(false);
    const [popMoradores, setPopMoradores] = useState(false);
    const [popObras, setPopObras] = useState(false);

    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao">
                <h1> Administração </h1>
                <div className="administracao-relatorios">
                    <button className="administracao-botao" onClick={ () => (setPopRelatorios(!popRelatorios)) }> Relatórios </button>
                </div>
                {
                        popRelatorios ?
                            (<div className="administracao-relatorios-pop">
                                <button className="administracao-botao inadimplencia"> Relatórios de Inadimplência </button>
                                <button className="administracao-botao moradores"> Relatórios dos Moradores </button>
                                <button className="administracao-botao condominos"> Relatórios dos Condôminos </button>
                                <button className="administracao-botao advertencias"> Relatórios das Advertências </button>
                                <button className="administracao-botao multas"> Relatórios das Multas </button>
                                <button className="administracao-botao funcionarios"> Relatórios dos Funcionários </button>
                                <button className="administracao-botao obras"> Relatórios das Obras </button>
                            </div>)
                        : null
                }
                <div className="administracao-moradores">
                    <button className="administracao-botao" onClick={ () => (setPopMoradores(!popMoradores)) }> Moradores e Condôminos </button>
                </div>
                {
                        popMoradores ?
                            (<div className="administracao-relatorios-pop">
                                <button className="administracao-botao moradores"> Usuarios Moradores </button>
                                <button className="administracao-botao condominos"> Usuarios Condôminos </button>
                            </div>)
                        : null
                }
                <div className="administracao-obras">
                    <button className="administracao-botao" onClick={ () => (setPopObras(!popObras)) }> Administraçao de Obras</button>
                </div>
                {
                        popObras ?
                            (<div className="administracao-relatorios-pop">
                                <button className="administracao-botao moradores"> Obras Realizadas </button>
                                <button className="administracao-botao condominos"> Obras em Andamento</button>
                                <button className="administracao-botao condominos"> Projetos de Obras </button>
                            </div>)
                        : null
                }
            </div>
        </div>
    );
}

export default Administracao;