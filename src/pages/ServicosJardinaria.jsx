import React from 'react';
import '../styles/servicosjardinariastyle.css';
import SideBar from '../components/SideBar';
import FotoJardineiro1 from '../assets/jardineira1.jpg';
import FotoJardineiro2 from '../assets/jardineiro2.jpg';

function ServicosJadinaria(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-jardinaria">
                <div className="perfil-jardineiro">
                    <img src={FotoJardineiro1} className="perfil-jardineiro1" />
                    <label className="jardineiro-nome"> Antonia Roberta</label>
                    <label className="jardineiro-contato">(45) X XXXX-XXXX</label>
                    <label className="jardineiro-horario"> 6:00 ~ 14:00</label>
                    <p className="jardineiro1-descricao"> Olá, Meu nome é Antonia Roberta, sou jardineira a 25 anos e atuo na are pela paixão pela botanica</p>
                </div>

                <div className="perfil-jardineiro">
                    <img src={FotoJardineiro2} className="perfil-jardineiro2" />
                    <label className="jardineiro-nome"> Carlos Silva</label>
                    <label className="jardineiro-contato"> (45) X XXXX-XXXX </label>
                    <label className="jardineiro-horario"> 8:00 ~ 16:00 </label>
                    <p className="jardineiro2-descricao"> Olá, Meu nome é Carlos Silva, sou jardineiro a 10 anos e atuo na are pela paixão pela botanica </p>
                </div>
            </div>
        </div>
    );
}

export default ServicosJadinaria;