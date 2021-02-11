import React, { useState } from 'react';
import '../styles/cardobrastyle.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SyncIcon from '@material-ui/icons/Sync';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

function CardFuncionario(props) {

    const [pagina, setPagina] = useState(true);
  
    return (
        <div className="card-obras-entorno">
            <div className="card-obras">
                    <img className="planta-projeto" src={props.fotofundo} alt="imagem da planta da obra"/>
                    <div className="caixa-informacoes">
                        {
                            pagina ?
                                <div className="coluna-horizontal-caixa-info">
                                    <div className="coluna-vertical-caixa-info">
                                        <label className="nome-obra"> {props.nome} </label>
                                        <label className="empresa-obra"> {props.empresa} </label>
                                        <label className="tempo-obra"> {props.tempo} </label>
                                        <label className="custo-obra"> {props.custo} </label>
                                    </div>
                                    <div onClick={() => setPagina(!pagina)}>
                                        <button className="botao"><ChevronRightIcon /></button>
                                    </div>
                                </div>
                            :
                                <div className="coluna-horizontal-caixa-info">
                                    <div className="coluna-vertical-caixa-info">
                                        <button className="botao" onClick={() => setPagina(!pagina)}><ChevronLeftIcon /></button>
                                    </div>
                                    <div>
                                        <button className="botao"><DeleteForeverIcon /></button>
                                        <button className="botao"><SyncIcon /></button>
                                        <button className="botao"><PictureAsPdfIcon /></button>
                                    </div>
                                </div>
                        }
                    </div>
            </div>
        </div>
    );
}

export default CardFuncionario;