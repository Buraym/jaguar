import React from 'react';
import '../styles/classificadosmovelstyles.css';
import SideBar from '../components/SideBar';
import Usuario1 from '../assets/usuario7.jpg';
import Usuario2 from '../assets/usuario8.jpg';
import Movel1 from '../assets/movel1.jpg';
import Movel2 from '../assets/movel2.jpg';
import CardClassificado from "../components/CardClassificado"

function ClassificadosMoveis(){
    return(
        <div className="tela-classificados">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados-moveis">
                <CardClassificado
                    foto={Usuario1}
                    fotoUtensilio={Movel1}
                    nome="Laura Antunes"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Laura Antunes, eu tenho essa item que minha mae usava para limar a calçada, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
                <CardClassificado
                    foto={Usuario2}
                    fotoUtensilio={Movel2}
                    nome="Emilio Enrico"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Emilio Enrico, eu tenho essa item que minha mae usava para limar a calçada, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
            </div>
        </div>
    );
}

export default ClassificadosMoveis;