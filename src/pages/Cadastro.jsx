import React from 'react';
import '../styles/cadastrostyle.css';
import { Link } from "react-router-dom";
import {
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

    return(
        <div className="tela-cadastro">
            <div className="caixa-cadastro-titulo">
                <h1> Crie Sua Conta </h1>
            </div>
            <div className="conteudo-cadastro">
                <div className="caixa-cadastros">
                    <form>
                        <div className="caixa-cadastro-input">
                            <ThemeProvider theme={theme}>
                                <TextField
                                label="E-Mail"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                color="secondary"
                                fullWidth="true"
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
                                />
                            </ThemeProvider>
                        </div>
                        <div className="caixa-cadastro-submit">
                            <Link to="/home">
                                <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;