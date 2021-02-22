import React from 'react';
import '../styles/administracaostyle.css';
import CardUsuario from '../components/CardUsuario';
import Foto1 from '../assets/sugerir-card.jpg';
import Foto2 from '../assets/sugerir-card2.jpg';
import Foto3 from '../assets/sugerir-card3.jpg';
import Foto4 from '../assets/sugerir-card4.jpg';
import SideBar from '../components/SideBar';

function AdministracaoCondominos(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao">
                <h1> Condominos </h1>
                <CardUsuario foto={Foto1} nome="Elisangela" cargo="gerente" status="'Nunca deixa para amanhã seus sonhos de vida'" alugado="Fritadeira Philips"/>
                <CardUsuario foto={Foto2} nome="Elisangela" cargo="condomino" status="Roses are Red, Violets are bLue" alugado="Wap 147 usada"/>
                <CardUsuario foto={Foto3} nome="Elisangela" cargo="condomino" status="Força, Foco e Persistência" alugado=""/>
                <CardUsuario foto={Foto4} nome="Elisangela" cargo="condomino" status="'Determinação e Coragem são as Chaves da Oportunidade'" alugado="exemplo"/>
            </div>
        </div>
    );
}

export default AdministracaoCondominos;