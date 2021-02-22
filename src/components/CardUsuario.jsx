import React, { useState } from 'react';
import '../styles/cardusuariostyle.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';

function CardFuncionario(props) {

    const [mostrar, setMostrar] = useState(false);
  
    return (
        <div className="card-usuario">
            <div className="card-usuario-superior">
                <div>
                    <img src={props.foto} className="foto-card-usuario" alt="foto de usuario"/>
                </div>
                <div className="card-usuario-superior-dados">
                    <label>{ props.nome }</label>
                    <label className="cargo-usuario">
                        { props.cargo }
                    </label>
                    {
                        (props.cargo === "gerente")
                            ?
                                <PersonOutlineIcon className="cargo-icone-usuario"/>
                            :
                                null
                    }
                    {
                        (props.cargo === "morador")
                            ?
                                <PersonIcon className="cargo-icone-usuario"/>
                            :
                                null
                    }
                    {
                        (props.cargo === "condomino")
                            ?
                                <HomeIcon className="cargo-icone-usuario"/>
                            :
                                null
                    }
                </div>
                <button className="card-usuario-botao" onClick={ () => {setMostrar(!mostrar)}}>
                    {
                        mostrar
                            ?
                                <KeyboardArrowUpIcon />
                            :
                                <KeyboardArrowDownIcon />
                    }
                </button>
            </div>
            {
                mostrar
                    ?
                        <div className="card-usuario-inferior">
                            <div className="card-usuario-inferior-extra">
                                <label>{ props.status }</label>
                                <label>{ props.alugado }</label>
                            </div>
                            <div className="card-usuario-inferior-botoes">
                                <button className="card-usuario-botao"><CreateIcon /></button>
                                <button className="card-usuario-botao"><DeleteForeverIcon /></button>
                            </div>
                        </div>
                    :
                        null
            }
        </div>
    );
}

export default CardFuncionario;