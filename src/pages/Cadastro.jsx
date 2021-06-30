import React from 'react';
import '../styles/cadastrostyle.css';
import { Link } from "react-router-dom";
import {
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import api from '../api.js';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2a9d8f",
      },
      secondary: {
        main: '#e85d04',
      },
    },
});

function Cadastro(){

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState(0)
    const [token, setToken] = useState("")


    const usuario = {
        nome:nome,
        senha:senha,
        email:email,
        telefone:telefone
    }

    const config = {
        headers: { Authorization: 'Bearer ' + token }
    }
    
    function HandleChangeNome(e){
        setNome(e.target.value);
        console.log(nome);
    }
    
    function HandleChangeSenha(e){
        setSenha(e.target.value);
        console.log(senha);
    }
    
    function HandleChangeEmail(e){
        setEmail(e.target.value);
        console.log(email);
    }
    
    function HandleChangeTelefone(e){
        setTelefone(e.target.value);
        console.log(telefone);
    }
    
    function HandleSubmit(event){

        const response = api.post("authenticate", {"username":"teskhgjhf","password":"teste1"})
        .then(
            response =>
                (console.log(response.data.jwt),
                setToken(response.data.jwt)
                )
        )
            
        const response2 = api.post("usuarios", usuario, null)
        .then(
            response2 => {
                console.log(response2.data)
            }
        )

        event.preventDefault();

    }

    return(
        <div className="tela-cadastro">
            <div className="caixa-cadastro-titulo">
                <h1> Crie Sua Conta </h1>
            </div>
            <div className="conteudo-cadastro">
                <div className="caixa-cadastros">
                    <form onSubmit={HandleSubmit}>
                        <div className="caixa-cadastro-input">
                            <ThemeProvider theme={theme}>
                                <TextField
                                label="E-Mail"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                color="secondary"
                                fullWidth="true"
                                onChange={HandleChangeEmail}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="caixa-cadastro-input">
                            <ThemeProvider theme={theme}>
                                <TextField
                                label="Nome Completo"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                color="secondary"
                                fullWidth="true"
                                onChange={HandleChangeNome}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="caixa-cadastro-input">
                            <ThemeProvider theme={theme}>
                                <TextField
                                label="Telefone"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                color="secondary"
                                fullWidth="true"
                                onChange={HandleChangeTelefone}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="caixa-cadastro-input">
                            <ThemeProvider theme={theme}>
                                <TextField
                                label="Senha"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                color="secondary"
                                fullWidth="true"
                                onChange={HandleChangeSenha}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="caixa-cadastro-submit">
                            {
                                /*<Link to="/home">
                                    <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                                </Link>*/
                            }
                            <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;