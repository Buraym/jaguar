import React from 'react';
import '../styles/cardclassificadostyle.css';
import PanToolIcon from '@material-ui/icons/PanTool';

function CardClassificado(props){
    return(
            
        <div className="item-utensilio">
            <div className="item-perfil">
                <img src={props.foto} className="perfil-pessoa-classificado-1" alt="foto do usuario"/>
                <PanToolIcon className="mao-dono"/>
                <img src={props.fotoUtensilio} className="classificado" alt="foto do classificado"/>
            </div>
            <label className="pessoa-nome"> {props.nome} </label>
            <label className="pessoa-contato"> {props.contato} </label>
            <p className="item-descricao"> {props.descricao} </p>
        </div>
    );
}

export default CardClassificado;