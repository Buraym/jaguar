import React from 'react';
import '../styles/servicoencanamentostyle.css';
import SideBar from '../components/SideBar';
import FotoEncanador1 from '../assets/encanador1.jpg';
import FotoEncanador2 from '../assets/encanador2.jpg';

function ServicosEncanamento(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-encanamento">
                <div className="perfil-encanador">
                        <img src={FotoEncanador1} className="perfil-encanador1" />
                        <label className="encanador-nome"> Otávio Augusto </label>
                        <label className="encanador-contato">(45) X XXXX-XXXX</label>
                        <label className="encanador-horario"> 7:30 ~ 15:00</label>
                        <p className="encanador-descricao">Meu nome é Otávio Augusto, tenho 37 anos e trabalho com encanamentos e tubulações de residências </p>
                    </div>

                    <div className="perfil-encanador">
                        <img src={FotoEncanador2} className="perfil-encanador2" />
                        <label className="encanador-nome">Henrico Gomez</label>
                        <label className="encanador-contato">(45) X XXXX-XXXX</label>
                        <label className="encanador-horario"> 9:30 ~ 19:00</label>
                        <p className="encanador-descricao"> Meu nome é Henrico Gomez, tenho 28 anos e trabalho com encanamentos e tubulações de residências </p>
                    </div>
            </div>
        </div>
    );
}

export default ServicosEncanamento;