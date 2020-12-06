import React from 'react';
import '../styles/servicosugerirstyle.css';
import SideBar from '../components/SideBar';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function ServicosSugerir(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-sugerir">
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
                            <button className="sugerir-submit"> Sugerir </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ServicosSugerir;