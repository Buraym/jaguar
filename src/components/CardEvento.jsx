import React from 'react';
import '../styles/cardeventostyle.css';

function CardEvento(props) {

    const dia = props.dia;
    const mes = props.mes;
    const data = dia + "/" + mes;

    return(
        <div className="card-evento">

            <div className="face-capa">
                <img className="card-foto" src={props.imagem} alt="" />
            </div>

            <div className="face-conteudo">
                <div className="card-nome">
                    <label className="evento-text"> {props.nome} </label>
                </div>
                <div className="card-descricao">
                    <p className="evento-text"> {props.descricao} </p>
                </div>
                <div className="card-local">
                    <p className="evento-text"> {props.local} </p>
                </div>
                <div className="card-data">
                    <label className="evento-text"> { data } </label>
                    <label className="evento-text"> {props.hora} </label>
                </div>
            </div>

        </div>
    );
}

export default CardEvento;