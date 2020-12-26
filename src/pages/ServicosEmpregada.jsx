import React from 'react';
import '../styles/servicoempregadastyle.css';
import SideBar from '../components/SideBar';
import CardServico from '../components/CardServico';
import FotoEmpregada1 from '../assets/empregado1.jpg';
import FotoEmpregada2 from '../assets/empregada2.jpg';

function ServicosEmpregada(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-empregada">
                <CardServico
                    foto={FotoEmpregada1}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
                <CardServico
                    foto={FotoEmpregada2}
                    nome="Juliana Bastos"
                    contato="(XX) X XXXX-XXXX"
                    horario="8:00 ~ 18:00"
                    descricao="Olá, meu nome é Juliana Bastos, e sou Jardineira há 7 anos"
                />
            </div>
        </div>
    );
}

export default ServicosEmpregada;