import React from 'react';
import '../styles/administracaostyle.css';
import SideBar from '../components/SideBar';
import CardObra from '../components/CardObra';
import FotoFundo from '../assets/planta-baixa-exemplo.jpg';

function AdministracaoObrasAndamento(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao-obras">
                <CardObra fotofundo={FotoFundo} nome="Restauração do Parquinho" empresa="Contruções Petrovicks SA" tempo="3 meses" custo="50.000 R$"/>
                <CardObra fotofundo={FotoFundo} nome="Restauração do Parquinho" empresa="Contruções Petrovicks SA" tempo="3 meses" custo="50.000 R$"/>
                <CardObra fotofundo={FotoFundo} nome="Restauração do Parquinho" empresa="Contruções Petrovicks SA" tempo="3 meses" custo="50.000 R$"/>
            </div>
        </div>
    );
}

export default AdministracaoObrasAndamento;