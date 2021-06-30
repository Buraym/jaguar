import '../styles/loginstyle.css';
import FotoLogo from '../assets/logo exemplo 4.png';
import { Link, useHistory } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import api from '../api';
import { waitFor } from '@testing-library/react';


function Login() {

    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")
    const [status, setStatus] = useState("")

    let history = useHistory();

    const Login = {
        email:email,
        senha:senha
    }

    const config = {
        headers: { Authorization: 'Bearer ' + token }
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(checked);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
        console.log(senha);
    };

    const handleSubmit = (event) => {
        console.log(Login.email, Login.senha)

        const response = api.post("authenticate", {"username":"teskhgjhf","password":"teste1"})
        .then(
            response =>
                (console.log(response.data.jwt),
                setToken(response.data.jwt)
                )
        )

        const response2 = api.post("usuarios/autenticacao", Login, config)
        .then(
            response2=>
                setStatus(response2.data),
                console.log(status)
        )

        if(status == "Login"){
            window.alert("Login Efetuado com sucesso")
            history.push('/home')
        } else {
            window.alert("Email e/ou senha incorreto(s) !!!")
            history.push('/')
        }

        event.preventDefault();
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
                            <label className="tag"> Email: </label>
                            <input type="text" onChange={handleChangeEmail} className="caixa_tag_input"/>
                        </div>
                        <div className="Caixa">
                            <label className="tag"> Senha: </label>
                            <input type="text" onChange={handleChangeSenha} className="caixa_tag_input"/>
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
                    <label className="lembrar"> <span> <Link className="span"to="/esqueceusenha"> Esqueceu sua senha </Link></span> ? Não tem <span><Link className="span" to="/cadastro"> Cadastro </Link></span> ? </label>
                    {
                        /*<Link to="/home">
                            <button className="botao_entrar">
                                <label className="entrar-label"> Entrar </label>
                            </button>
                        </Link>*/
                    }
                    <button className="botao_entrar" onClick={handleSubmit}>
                        <label className="entrar-label"> Entrar </label>
                    </button>
                </div>
            </div>
            
        </div>  
      
    );

}

export default Login;