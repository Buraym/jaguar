import React from 'react';
import '../styles/loginstyle.css';
import FotoLogo from '../assets/logo exemplo 4.png';
import { Link } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';

function Login() {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(checked);
    };

    return (

        <div className="conteudo-login">

            <div className="caixalogo">

                <img className="logo" src={FotoLogo} alt="foto logo" />

            </div>

            <div>
                <div className="conteudo-input-login">
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
                </div>
                <div className="Caixa_lembrar">
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        color="default"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <label className="lembrar"> Lembrar usuario </label>
                </div>
                <div className="Caixa_botao">
                    <label className="lembrar"> Esqueceu sua senha ? Não tem cadastro ? </label>
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