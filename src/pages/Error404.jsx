import React from 'react';
import '../styles/telaerrostyle.css';
import SideBar from '../components/SideBar';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Link } from 'react-router-dom';

function Administracao(){

    return(
        <div className="tela-erro-404">
            <div className="aba">
                <SideBar status="gerente"/>
            </div>
            <div className="conteudo-erro">
                <h1> Desculpe, esta página está fora de acesso <MoodBadIcon /> !!!</h1>
                <Link to="/home">
                    <KeyboardBackspaceIcon style={{"color":"#2a9d8f"}}/>
                </Link>       
            </div>
        </div>
    );
}

export default Administracao;