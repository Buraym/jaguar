import React from 'react';

function Notificacao(props) {

    const valortitulo = document.getElementById("input-titulo").value;
    const valortexto = document.getElementById("input-descricao").value;

    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var data_atual = dia + "/" + (mes + 1) + "/" + ano;

    function enviar(){
        if (valortitulo && valortexto){

        } else {
            alert("Você não preencheu todos os campos");
        }
    }

    return(
        <div className="caixa-notificacao">
                <input type="text" className="input-titulo"/>
                <input type="text" className="input-descricao"/>
                <input type="submit" className="envio" onClick={}  value={valortitulo, valortexto} />
        </div>
    );
}

export default Notificacao;