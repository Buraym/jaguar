import React from 'react';
import '../styles/notificacaostyle.css';

function Notificacao(props) {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var data_atual = dia + "/" + (mes + 1) + "/" + ano;

    return(
        <div className="caixa-notificacao">
            <div>
                <div className="caixa-notificacao-topico">
                    <label> { props.titulo } </label>
                    <label> { data_atual } </label>
                </div>
                <div className="caixa-notificacao-texto">
                    <p className="input-descricao"> { props.descricao}</p>
                </div>
            </div>
        </div>
    );
}

export default Notificacao;