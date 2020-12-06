import React from 'react';
import '../styles/servicobabastyle.css';
import SideBar from '../components/SideBar';
import FotoBaba1 from '../assets/baba1.jpg';
import FotoBaba2 from '../assets/baba2.jpg';

function ServicosBaba(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-baba">
                <div className="perfil-baba">
                        <img src={FotoBaba1} className="perfil-jardineiro1" />
                        <label className="baba-nome"> Elaine Roberta </label>
                        <label className="baba-contato"> (45) X XXXX-XXXX </label>
                        <label className="baba-horario"> 6:30 ~ 14:30 </label>
                        <p className="baba-descricao"> Olá, Meu nome é Elaine Roberta e eu trabalho há 20 anos como baba de crianças e adolescentes</p>
                    </div>

                    <div className="perfil-baba">
                        <img src={FotoBaba2} className="perfil-baba2" />
                        <label className="baba-nome"> Eduarda Faustini </label>
                        <label className="baba-contato"> (45) X XXXX-XXXX </label>
                        <label className="baba-horario"> 8:30 ~ 16:30 </label>
                        <p className="baba-descricao"> Olá, Meu nome é Eduarda Faustini e eu trabalho há 20 anos como baba de crianças e adolescentes</p>
                    </div>
            </div>
        </div>
    );
}

export default ServicosBaba;