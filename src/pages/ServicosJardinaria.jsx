import React from 'react';
import '../styles/servicosjardinariastyle.css';
import SideBar from '../components/SideBar';
import CardServico from '../components/CardServico';
import FotoJardineiro1 from '../assets/jardineira1.jpg';
import FotoJardineiro2 from '../assets/jardineiro2.jpg';

function ServicosJadinaria(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-jardinaria">
                <CardServico
                    foto={FotoJardineiro1}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
                <CardServico
                    foto={FotoJardineiro2}
                    nome="Antonio Mendez"
                    contato="(XX) X XXXX-XXXX"
                    horario="10:00 ~ 20:00"
                    descricao="Olá, meu nome é Antonio Mendez, e sou Jardineiro há 27 anos"
                />
            </div>
        </div>
    );
}

export default ServicosJadinaria;