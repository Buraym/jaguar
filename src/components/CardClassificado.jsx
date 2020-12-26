import React from 'react';
import '../styles/cardclassificadostyle.css';
import PanToolIcon from '@material-ui/icons/PanTool';

function CardClassificado(props){
    return(
            
        <div className="item-utensilio">
            <div className="item-perfil">
                <img src={props.foto} className="perfil-pessoa-classificado-1" />
                <PanToolIcon className="mao-dono"/>
                <img src={props.fotoUtensilio} className="classificado" />
            </div>
            <label className="pessoa-nome"> {props.nome} </label>
            <label className="pessoa-contato"> {props.contato} </label>
            <p className="item-descricao"> {props.descricao} </p>
        </div>
    );
}

export default CardClassificado;