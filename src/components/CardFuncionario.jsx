import React from 'react';
import '../styles/cardfuncionariosstyle.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
                    <HourglassFullIcon color="action" />
                </button>
                <button className="escalas">
                    <RefreshIcon color="action" />
                </button>
                <button className="deletar">
                    <DeleteForeverIcon color="action" />
                </button>
            </div>
        </div>
    );
}

export default CardFuncionario;