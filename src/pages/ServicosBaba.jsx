import React from 'react';
import '../styles/servicobabastyle.css';
import SideBar from '../components/SideBar';
import CardServico from '../components/CardServico';
import FotoBaba1 from '../assets/baba1.jpg';
import FotoBaba2 from '../assets/baba2.jpg';

function ServicosBaba(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-baba">
                <CardServico
                    foto={FotoBaba1}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
                <CardServico
                    foto={FotoBaba2}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
            </div>
        </div>
    );
}

export default ServicosBaba;