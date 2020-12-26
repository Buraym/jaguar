import React from 'react';
import '../styles/classificadosugerirstyle.css';
import SideBar from '../components/SideBar';
import {Link} from "react-router-dom";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function ClassificadosSugerir(){

    return(
        <div className="tela-classificados">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados-sugerir">
                <AccountCircleRoundedIcon className="" style={{ fontSize: 60 }}/>
                <div className="campo-sugerir-caixa">
                    <form>
                        <div className="campo-sugerir">
                            <label>Nome do Profissional:</label>
                            <input className="campo-sugerir-input" type="text" />
                        </div>
                        <div className="campo-sugerir">
                            <label>Setor Comercial:</label>
                            <input className="campo-sugerir-input" type="text" />
                        </div>
                        <div className="campo-sugerir">
                            <label>Contato:</label>
                            <input className="campo-sugerir-input" type="text" />
                        </div>
                        <div className="campo-sugerir">
                            <label>Endereço comercial:</label>
                            <input className="campo-sugerir-input" type="text" />
                        </div>
                        <div className="campo-sugerir-submit">
                            <Link to="/classificados">
                                <button className="sugerir-submit"> Sugerir </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClassificadosSugerir;