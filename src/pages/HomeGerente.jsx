import React, { useState } from 'react';
import '../styles/homegerentestyles.css';
import SideBar from '../components/SideBar';
import FotoPerfil from '../assets/imagem perfil exemplo.jpg';
import Portal from '@material-ui/core/Portal';
import Notificacao from '../components/Notificacao';

function HomeGerente() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [mount, setMount] = useState(false);
    const container = React.useRef(null);
    //console.log(diapublicado);

    var caixa_avisos ={
        titulo: titulo,
        descricao: descricao
    }

    function HandleChangeTitulo(e){
        setTitulo(e.target.value);
        console.log("titulo: " + titulo)
    }

    function HandleChangeDescricao(e){
        setDescricao(e.target.value);
        console.log("descricao: " + descricao)
    }

    function HandleSubmit(e){
        caixa_avisos.titulo = titulo;
        caixa_avisos.descricao = descricao;
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
                    {mount ?
                        (
                            <Portal container={container.current}>
                                <Notificacao titulo={ caixa_avisos.titulo } descricao={ caixa_avisos.descricao }/>
                            </Portal>
                        ) : null
                    }
                    <div ref={container} />
                </div>
            </div>
        </div>  
    );
}

export default HomeGerente;