import React from 'react';
import '../styles/cardservicostyle.css';

function CardServico(props){

    return(
        <div className="card-perfil-servico">
            <div className="card-perfil-superior">
                <img src={props.foto} className="perfil-servico-foto" />
                <div className="card-perfil-dados">
                    <label className="perfil-servico-nome"> {props.nome} </label>
                    <label className="perfil-servico-contato"> {props.contato} </label>
                    <label className="perfil-servico-horario"> {props.horario} </label>
                </div>
            </div>
            <p className="perfil-servico-descricao"> {props.descricao} </p>
        </div>
    );
}

export default CardServico;