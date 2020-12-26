import React from 'react';
import '../styles/classificadosmaquinastyles.css';
import SideBar from '../components/SideBar';
import Usuario1 from '../assets/usuario5.jpg';
import Usuario2 from '../assets/usuario6.jpg';
import Maquina1 from '../assets/maquina1.jpg';
import Maquina2 from '../assets/maquina2.png';
import CardClassificado from "../components/CardClassificado"

function ClassificadosLimpeza(){
    return(
        <div className="tela-classificados">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados-maquina">
                <CardClassificado
                    foto={Usuario1}
                    fotoUtensilio={Maquina1}
                    nome="Mateus Kleber Lima"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Mateus Kleber Lima, eu tenho essa item que minha mae usava para limar a calçada, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
                <CardClassificado
                    foto={Usuario2}
                    fotoUtensilio={Maquina2}
                    nome="Eliane Barbosa"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Eliane Barbosa, eu tenho essa item que eu lavo as roupas da minha casa, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
            </div>
        </div>
    );
}

export default ClassificadosLimpeza;