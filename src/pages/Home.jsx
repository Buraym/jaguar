import React from 'react';
import '../styles/home.css';
import SideBar from '../components/SideBar';
import FotoPerfil from '../assets/imagem perfil exemplo.jpg';
import Notificacao from '../components/Notificacao';

function Home() {

    return (
        <div className="tela">
            <div className="aba-principal">
                <SideBar />
            </div>
            <div className="conteudo-pagina">
                <div className="painel-animacao">
                    <img className="foto-usuario" src={FotoPerfil} alt="Foto do perfil" />
                    <label> Olá, Fulana de tal </label>
                    <label> Seja Bem-vindo </label>
                </div>
                <div className="conteudo-pagina-avisos-caixa">
                    <Notificacao titulo="Ata Nº124: Tópico sobre Volume alto durante a noite" descricao="È constituído regra vigente á partir da data de publicação desta ata que quaisquer sons emitidos depois da meia noite, exceto em datas festivas (eg: Festa Junina, Natal, Pascoa e afins ) ou com a devida permissão será, deverá efetuar o pagamanto da multa de 500,00 R$ e uma advertência por escrito será entregue na caixa de correio do infrator"/>
                    <Notificacao titulo="Ata Nº124: Tópico sobre Volume alto durante a noite" descricao="È constituído regra vigente á partir da data de publicação desta ata que quaisquer sons emitidos depois da meia noite, exceto em datas festivas (eg: Festa Junina, Natal, Pascoa e afins ) ou com a devida permissão será, deverá efetuar o pagamanto da multa de 500,00 R$ e uma advertência por escrito será entregue na caixa de correio do infrator"/>
                    <Notificacao titulo="Ata Nº124: Tópico sobre Volume alto durante a noite" descricao="È constituído regra vigente á partir da data de publicação desta ata que quaisquer sons emitidos depois da meia noite, exceto em datas festivas (eg: Festa Junina, Natal, Pascoa e afins ) ou com a devida permissão será, deverá efetuar o pagamanto da multa de 500,00 R$ e uma advertência por escrito será entregue na caixa de correio do infrator"/>
                    <Notificacao titulo="Ata Nº124: Tópico sobre Volume alto durante a noite" descricao="È constituído regra vigente á partir da data de publicação desta ata que quaisquer sons emitidos depois da meia noite, exceto em datas festivas (eg: Festa Junina, Natal, Pascoa e afins ) ou com a devida permissão será, deverá efetuar o pagamanto da multa de 500,00 R$ e uma advertência por escrito será entregue na caixa de correio do infrator"/>
                    <Notificacao titulo="Ata Nº124: Tópico sobre Volume alto durante a noite" descricao="È constituído regra vigente á partir da data de publicação desta ata que quaisquer sons emitidos depois da meia noite, exceto em datas festivas (eg: Festa Junina, Natal, Pascoa e afins ) ou com a devida permissão será, deverá efetuar o pagamanto da multa de 500,00 R$ e uma advertência por escrito será entregue na caixa de correio do infrator"/>
                </div>
            </div>
        </div>  
    );
}

export default Home;