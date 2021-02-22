import React, { useState } from 'react';
import '../styles/cadastrostyle.css';
import { Link, Redirect } from "react-router-dom";
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

function EsqueceuSenha(){

    const [opcao, setOpcao] = useState(0);
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [codigo_email, setCodigoEmail] = useState("");
    const [codigo_telefone, setCodigoTelefone] = useState("");

    var opcoes = {
        email:email,
        telefone:telefone
    }

    function HandleChangeEmail(e){
        setEmail(e.target.value);
    }

    function HandleChangeTelefone(e){
        setTelefone(e.target.value);
    }

    function HandleSubmit(e){
        if((email !== undefined && email !== "") && (telefone !== undefined && telefone !== "")){
            opcoes.email = email;
            opcoes.telefone = email;
            setOpcao(1);
            
        }
        else if (email !== undefined && email !== ""){
            opcoes.email = email;
            setOpcao(2);
        }
        else if (telefone !== undefined && telefone !== ""){
            opcoes.telefone = telefone;
            setOpcao(3);
        }
        else{
            window.alert("coloque seu email, telefone ou ambos nos campos !!!");
            document.location.reload();
        }
       
        e.preventDefault();
    }

    return(
        <div className="tela-cadastro">
            <div className="caixa-cadastro-titulo">
                <h1> Recuperação da sua conta </h1>
            </div>
            <div className="conteudo-cadastro">
                <div className="caixa-cadastros">
                    {
                        (opcao === 0)
                            ?
                                <div className="caixa-cadastros">
                                    <form onSubmit={HandleSubmit}>
                                        <label>Você deseja recuperar pelo e-mail ou pelo seu telefone ?</label>
                                        <div className="caixa-cadastro-input">
                                            <ThemeProvider theme={theme}>
                                                <TextField
                                                    id="input-email-valor"
                                                    label="E-Mail"
                                                    variant="outlined"
                                                    id="mui-theme-provider-outlined-input"
                                                    color="secondary"
                                                    fullWidth={true}
                                                    onChange={HandleChangeEmail}
                                                />
                                            </ThemeProvider>
                                        </div>
                                        <div className="caixa-cadastro-input">
                                            <ThemeProvider theme={theme}>
                                                <TextField
                                                    id="input-telefone-valor"
                                                    label="Telefone"
                                                    variant="outlined"
                                                    id="mui-theme-provider-outlined-input"
                                                    color="secondary"
                                                    fullWidth={true}
                                                    onChange={HandleChangeTelefone}
                                                />
                                            </ThemeProvider>
                                        </div>
                                        <div className="caixa-cadastro-submit">
                                            <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                                        </div>
                                    </form>
                                </div>
                            :
                                null
                    }
                    {
                        (opcao === 1)
                            ?
                                <div className="caixa-cadastros">
                                    <form>
                                        <div className="caixa-cadastro-input">
                                            <ThemeProvider theme={theme}>
                                                <TextField
                                                    id="input-telefone-valor"
                                                    label="Código via Email"
                                                    variant="outlined"
                                                    id="mui-theme-provider-outlined-input"
                                                    color="secondary"
                                                    fullWidth={true}
                                                    onChange={HandleChangeTelefone}
                                                />
                                            </ThemeProvider>
                                        </div>
                                        <div className="caixa-cadastro-input">
                                            <ThemeProvider theme={theme}>
                                                <TextField
                                                    id="input-telefone-valor"
                                                    label="Código SMS"
                                                    variant="outlined"
                                                    id="mui-theme-provider-outlined-input"
                                                    color="secondary"
                                                    fullWidth={true}
                                                    onChange={HandleChangeTelefone}
                                                />
                                            </ThemeProvider>
                                        </div>
                                        <div className="caixa-cadastro-submit">
                                            <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                                        </div>
                                        <label> Digite aqui o código que você recebeu pelo telefone, caso você não tenha recebido o código via SMS, opcionalmente pegue o código pelo seu e-mail indicado, caso ainda não tenha recebido veja a seção de SPAM ou recarregue a pagina</label>
                                    </form>
                                </div>
                            :
                                null
                    }
                    {
                        (opcao === 2)
                            ?
                                <div className="caixa-cadastros">
                                    <form>
                                        <div className="caixa-cadastro-input">
                                            <ThemeProvider theme={theme}>
                                                <TextField
                                                    id="input-telefone-valor"
                                                    label="Código via Email"
                                                    variant="outlined"
                                                    id="mui-theme-provider-outlined-input"
                                                    color="secondary"
                                                    fullWidth={true}
                                                    onChange={HandleChangeTelefone}
                                                />
                                            </ThemeProvider>
                                        </div>
                                        <div className="caixa-cadastro-submit">
                                            <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                                        </div>
                                        <label> Digite o código enviado ao seu e-mail indicado, caso ainda não tenha recebido veja a seção de SPAM ou recarregue a pagina</label>
                                    </form>
                                </div>
                            :
                                null
                    }
                    {
                        (opcao === 3)
                            ?
                                <div className="caixa-cadastros">
                                    <form>
                                        <div className="caixa-cadastro-input">
                                            <ThemeProvider theme={theme}>
                                                <TextField
                                                    id="input-telefone-valor"
                                                    label="Código SMS"
                                                    variant="outlined"
                                                    id="mui-theme-provider-outlined-input"
                                                    color="primary"
                                                    fullWidth={true}
                                                    onChange={HandleChangeTelefone}
                                                />
                                            </ThemeProvider>
                                        </div>
                                        <div className="caixa-cadastro-submit">
                                            <input className="input-cadastro-submit" type="Submit" placeholder="Criar sua Conta"/>
                                        </div>
                                        <label> Digite aqui o código que você recebeu pelo telefone, caso você não tenha recebido o código via SMS, verifique se o numero enviado está correto ou recarregue a pagina</label>
                                    </form>
                                </div>
                            :
                                null
                    }
                </div>
            </div>
        </div>
    );
}

export default EsqueceuSenha;