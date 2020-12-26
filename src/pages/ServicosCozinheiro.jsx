import React from 'react';
import '../styles/servicocozinheirostyle.css';
import SideBar from '../components/SideBar';
import CardServico from '../components/CardServico';
import FotoCozinheiro1 from '../assets/cozinheiro1.jpg';
import FotoCozinheiro2 from '../assets/cozinheira2.jpg';

function ServicosCozinheiro(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-cozinheiro">
                <CardServico
                    foto={FotoCozinheiro1}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
                <CardServico
                    foto={FotoCozinheiro2}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
            </div>
        </div>
    );
}

export default ServicosCozinheiro;