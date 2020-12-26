import React from 'react';
import '../styles/classificadosutensiliostyles.css';
import SideBar from '../components/SideBar';
import PanToolIcon from '@material-ui/icons/PanTool';
import Usuario1 from '../assets/usuario1.jpg';
import Usuario2 from '../assets/usuario2.jpg';
import Utensilio1 from '../assets/utensilio1.jpg';
import Utensilio2 from '../assets/utensilio2.jpg';
import CardClassificado from "../components/CardClassificado"

function ClassificadosUtensilios(){
    return(
        <div className="tela-classificados">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados-utensilios">
                <CardClassificado
                    foto={Usuario1}
                    fotoUtensilio={Utensilio1}
                    nome="Eduardo Anselmo"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Eduardo Anselmo, eu tenho essa item que foi passado de geração em geração para minha familia, no entanto gostaria de vender para poder pagar a minha faculdade de direito, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
                <CardClassificado
                    foto={Usuario2}
                    fotoUtensilio={Utensilio2}
                    nome="Antonio Ducilio"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Antonio Ducilio, eu tenho essa item que foi feito pela minha bisavó no ano de 1910, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
            </div>
        </div>
    );
}

export default ClassificadosUtensilios;