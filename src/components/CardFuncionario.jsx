import React from 'react';
import '../styles/cardfuncionariosstyle.css';
import Atualizar from '../assets/icons/baseline_refresh_black_18dp.png';
import Escalas from '../assets/icons/baseline_hourglass_full_black_18dp.png';
import Deletar from '../assets/icons/baseline_delete_forever_black_18dp.png';

function CardFuncionario(props){

    return(
        <div className="cardfuncionario">
            <img className="funcionario-fundo" src={props.fotofundo} alt="foto de fundo" />
            <img className="funcionario-foto" src={props.fotofuncionario} alt="foto de fundo" />
            <div className="caixa-informacoes">
                <label className="funcionario-nome"> {props.nome} </label>
                <label className="funcionario-cargo"> {props.cargo} </label>
                <label className="funcionario-escala"> {props.escala} </label>
            </div>
            <div className="caixa-acoes">
                <button className="atualizar">
                    <img className="icone-botao-acao" src={Atualizar} alt="botao atualizar" />
                </button>
                <button className="escalas">
                    <img className="icone-botao-acao" src={Escalas} alt="botao escalas" />
                </button>
                <button className="deletar">
                    <img className="icone-botao-acao" src={Deletar} alt="botao deletar" />
                </button>
            </div>
        </div>
    );
}

export default CardFuncionario;