import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/homegerentestyles.css';
import SideBar from '../components/SideBar';
import FotoPerfil from '../assets/imagem perfil exemplo.jpg';
import Notificacao from '../components/Notificacao';

function HomeGerente() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [mount, setMount] = useState(false)

    var caixa_avisos ={
        titulo: titulo,
        descricao: descricao
    }

    function HandleChangeTitulo(e){
        if (mount !== true){
            setTitulo(e.target.value);
        }
    }

    function HandleChangeDescricao(e){
        if (mount !== true) {
            setDescricao(e.target.value);
        }
    }

    function HandleSubmit(e){
        var titulo_fixo = titulo;
        var descricao_fixo = descricao;
        caixa_avisos.titulo = titulo_fixo;
        caixa_avisos.descricao = descricao_fixo;
        const caixa = document.createElement("div");
        const caixa_notificacao_atual = document.getElementById("caixa-notificacao-atual");
        ReactDOM.render(<Notificacao titulo={caixa_avisos.titulo} descricao={caixa_avisos.descricao} />, caixa);
        caixa_notificacao_atual.appendChild(caixa);
        setMount(true);
        e.preventDefault();
    }

    return (
        <div className="tela">
            <div className="aba-principal">
                <SideBar />
            </div>
            <div className="conteudo-pagina">
                <div className="painel-animacao">
                    <img className="foto-usuario" src={FotoPerfil} alt="Foto do perfil" />
                    <label> Olá, Fulana de tal </label>
                    <label> Seja Bem-vindo </label>
                </div>
                <div className="conteudo-pagina-avisos-caixa">
                    <div className="caixa-criador-avisos">
                        <input className="input-titulo-avisos" type="text" onChange={HandleChangeTitulo}/>
                        <input className="input-descricao-avisos" type="text" onChange={HandleChangeDescricao}/>
                        <input className="input-submit-avisos" type="submit" onClick={HandleSubmit}/>
                    </div>
                    <div id="caixa-notificacao-atual">
                        <Notificacao titulo="Ata Nº124: Tópico sobre Volume alto durante a noite" descricao="È constituído regra vigente á partir da data de publicação desta ata que quaisquer sons emitidos depois da meia noite, exceto em datas festivas (eg: Festa Junina, Natal, Pascoa e afins ) ou com a devida permissão será, deverá efetuar o pagamanto da multa de 500,00 R$ e uma advertência por escrito será entregue na caixa de correio do infrator"/>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default HomeGerente;