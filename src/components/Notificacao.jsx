import React from 'react';
import '../styles/notificacaostyle.css';

function Notificacao(props) {

    const valortitulo = document.getElementsByClassName("input-titulo").value;
    const valortexto = document.getElementsByClassName("input-descricao").value;

    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var data_atual = dia + "/" + (mes + 1) + "/" + ano;

    function HandleEnviar(){
        if (valortitulo && valortexto){

        } else {
            alert("Você não preencheu todos os campos");
        }
    }

    return(
        <div className="caixa-notificacao" onSubmit={HandleEnviar}>
            <form>
                <input type="text" className="input-titulo"/>
                <input type="text" className="input-descricao"/>
                <input type="submit" className="envio" value={valortitulo, valortexto} />
            </form>
        </div>
    );
}

export default Notificacao;