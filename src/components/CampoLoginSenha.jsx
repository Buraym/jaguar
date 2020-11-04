import React from 'react';
import '../styles/campologinsenhastyle.css';
import CaixaInput from './CaixaInput';
import ImagemBotao from '../assets/icons/outline_check_box_outline_blank_black_18dp.png';

function CampoLoginSenha() {

    return (

        <div>

            <div className="Caixa_input_1">
            
                <CaixaInput tag="Login" />

            </div>

            <div className="Caixa_input_2">

                <CaixaInput tag="Senha" />

            </div>

            <div className="Caixa_lembrar">

                <img className="caixa_selecao" src={ImagemBotao} alt="Caixa_de_seleção" ></img>
                <label className="lembrar"> Esqueceu sua senha ? Não tem cadastro </label>

            </div>

            <div className="Caixa_botao">

                <button className="botao_entrar"> Entrar </button>

            </div>

        </div>

      
    );

}

export default CampoLoginSenha;