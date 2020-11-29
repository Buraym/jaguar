import React from 'react';

function CardFuncionario(props){

    return(
        <div className="cardfuncionario">
            <img className="funcionario-fundo" alt="foto de fundo" />
            <img className="funcionario-foto" alt="foto de fundo" />
            <div className="caixa-informacoes">
                <label className="funcionario-nome"> {props.nome} </label>
                <label className="funcionario-cargo"> {props.cargo} </label>
                <label className="funcionario-escala"> {props.escala} </label>
                <label className="funcionario-salario"> R$ {props.salario} </label>
            </div>
            <div className="caixa-acoes">
                <button className="atualizar"></button>
                <button className="escalas"></button>
                <button className="deletar"></button>
            </div>
        </div>
    );
}

export default CardFuncionario;