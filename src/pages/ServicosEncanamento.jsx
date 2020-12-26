import React from 'react';
import '../styles/servicoencanamentostyle.css';
import SideBar from '../components/SideBar';
import CardServico from '../components/CardServico';
import FotoEncanador1 from '../assets/encanador1.jpg';
import FotoEncanador2 from '../assets/encanador2.jpg';

function ServicosEncanamento(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-encanamento">
                <CardServico
                    foto={FotoEncanador1}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
                <CardServico
                    foto={FotoEncanador2}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
            </div>
        </div>
    );
}

export default ServicosEncanamento;