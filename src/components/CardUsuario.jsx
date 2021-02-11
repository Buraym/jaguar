import React, { useState } from 'react';
import '../styles/cardfuncionariosstyle.css';
import InfoIcon from '@material-ui/icons/Info';
import EjectIcon from '@material-ui/icons/Eject';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';

function CardFuncionario(props) {

    const [mostrar, setMostrar] = useState(false);
  
    return (
        <div className="cardusuario">
            <div>
                <div>
                    <div className="foto-usuario"></div>
                </div>
                <div>
                    <label>{ props.nome }</label>
                    <label className="cargo-usuario">
                        { props.cargo }
                        {
                            () => {
                                if(props.cargo === "gerente"){
                                    <PersonOutlineIcon className="cargo-icone-usuario"/>
                                } else if(props.cargo === "morador"){
                                    <PersonIcon className="cargo-icone-usuario"/>
                                } else if(props.cargo === "condomino"){
                                    <HomeIcon className="cargo-icone-usuario"/>
                                }
                            }
                        }
                    </label>
                </div>
                <button onClick={setMostrar(!mostrar)}>
                    {
                        mostrar
                            ?
                                <InfoIcon />
                            :
                                <EjectIcon />
                    }
                </button>
            </div>
            {
                mostrar
                    ?
                        <div>
                            <label>{ props.status }</label>
                            <label>{ props.alugado }</label>
                        </div>
                    :
                        null
            }
        </div>
    );
}

export default CardFuncionario;