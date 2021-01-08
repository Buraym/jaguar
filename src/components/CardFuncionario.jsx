import React, { useEffect } from 'react';
import '../styles/cardfuncionariosstyle.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

function CardFuncionario(props) {
  
    return (
        <div className="cardfuncionario">
            <img className="funcionario-fundo" src={props.fotofundo} alt="imagem de fundo do card"/>
            <img className="funcionario-foto" src={props.fotofuncionario} alt="imagem da foto do funcionario do card"/>
            <div className="caixa-informacoes">
                <label className="funcionario-nome"> {props.nome} </label>
                <label className="funcionario-cargo"> {props.cargo} </label>
                <label className="funcionario-escala"> {props.escala} </label>
                <label className="funcionario-salario"> {props.salario} </label>
            </div>
            <div className="caixa-acoes">
                <Link to="/escalasdosfuncionarios">
                    <button className="atualizar">
                        <HourglassFullIcon color="action" />
                    </button>
                </Link>
                <button className="escalas">
                    <RefreshIcon color="action" />
                </button>
                <button className="deletar" onFocus={
                    useEffect( () => {
                            var card = document.getElementsByClassName("desaparecer-caixa")[0];
                            card.style.display = "flex";
                            document.getElementsByClassName("desaparecer-botao")[0].style.cursor = "pointer";
                            document.getElementsByClassName("desaparecer-botao")[1].style.pointerEvents = "none";
                        }
                    )
                }>
                    <DeleteForeverIcon color="action" />
                </button>
            </div>
            <div className="desaparecer-caixa">
                <div className="desaparecer-mensagem-caixa">
                    <label> Você quer mesmo excluir este perfil de funcionario ? este processo é irreversivel ! </label>
                </div>
                <div className="desaparecer-caixa-botoes">
                    <button className="desaparecer-botao">
                        <DeleteIcon className="icone-desaparecer"/>
                    </button>
                    <button className="desaparecer-botao">
                        <ExitToAppIcon className="icone-desaparecer"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardFuncionario;