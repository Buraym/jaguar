import React from 'react';
import '../styles/classificadosestacionamentostyles.css';
import SideBar from '../components/SideBar';
import Usuario1 from '../assets/usuario3.jpg';
import Usuario2 from '../assets/usuario4.jpg';
import Vaga1 from '../assets/vaga1.jpg';
import Vaga2 from '../assets/vaga2.jpg';
import CardClassificado from "../components/CardClassificado"

function ClassificadosEstacionamento(){
    return(
        <div className="tela-classificados">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados-estacionamento">
                <CardClassificado
                    foto={Usuario1}
                    fotoUtensilio={Vaga1}
                    nome="Ana Elisabeth"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Ana Elisabeth, eu tenho essa item que minha mae usava para limar a calçada, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
                <CardClassificado
                    foto={Usuario2}
                    fotoUtensilio={Vaga2}
                    nome="Elsa Carla"
                    contato="(XX) X XXXX-XXXX"
                    descricao="Olá, meu nome é Elsa Carla, eu tenho essa item que minha mae usava para limar a calçada, aceito ofertas porém não estou disposto a trocar por um outro item"
                />
            </div>
        </div>
    );
}

export default ClassificadosEstacionamento;