import React from 'react';
import '../styles/loginstyle.css';
import FotoLogo from '../assets/logo exemplo 4.png';
import { Link } from "react-router-dom";
import ImagemBotao from '../assets/icons/outline_check_box_outline_blank_black_18dp.png';

function Login() {

    return (

        <div className="fundo">

            <div className="caixalogo">

                <img src={FotoLogo} alt="foto logo" />

            </div>

            <div>
                <form>
                    <div className="Caixa">
                        <label className="tag"> Login: </label>
                        <input type="text" className="caixa_tag_input"/>
                    </div>
                    <div className="Caixa">
                        <label className="tag"> Senha: </label>
                        <input type="text" className="caixa_tag_input"/>
                    </div>
                </form>
                <div className="Caixa_lembrar">
                    <img className="caixa_selecao" src={ImagemBotao} alt="Caixa_de_seleção" ></img>
                    <label className="lembrar"> Esqueceu sua senha ? Não tem cadastro </label>
                </div>
                <div className="Caixa_botao">
                    <Link to="/home">
                        <button className="botao_entrar">
                            <label className="entrar-label"> Entrar </label>
                        </button>
                    </Link>
                </div>
            </div>
            {/*<CampoLoginSenha/>*/}
            
        </div>  
      
    );

}

export default Login;