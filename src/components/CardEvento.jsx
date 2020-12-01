import React from 'react';
import '../styles/cardeventostyle.css';

function CardEvento(props) {

    const dia = props.dia;
    const mes = props.mes;
    const data = dia + "/" + mes;
    const hora = props.hora;

    return(
        <div className="card-evento">

            <div className="face capa">
                <div className="caixa-cardfoto">
                    <img className="card-foto" src={props.imagem} alt={props.fallback} />
                </div>
            </div>

            <div className="face conteudo">
                <div className="card-nome">
                    <label className="nome"> {props.nome} </label>
                </div>
                <div className="card-descricao">
                    <p className="descricao"> {props.descricao} </p>
                </div>
                <div className="card-local">
                    <p className="local"> {props.local} </p>
                </div>
                <div className="card-data">
                    <label className="data"> { data } </label>
                    <label className="hora"> {props.hora} </label>
                </div>
            </div>

        </div>
    );
}

export default CardEvento;