import React from 'react';
import '../styles/servicocozinheirostyle.css';
import SideBar from '../components/SideBar';
import FotoCozinheiro1 from '../assets/cozinheiro1.jpg';
import FotoCozinheiro2 from '../assets/cozinheira2.jpg';

function ServicosCozinheiro(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-cozinheiro">
                <div className="perfil-cozinheiro">
                        <img src={FotoCozinheiro1} className="perfil-cozinheiro1" />
                        <label className="cozinheiro-nome"> Eduardo Lima </label>
                        <label className="cozinheiro-contato"> (45) X XXXX-XXXX </label>
                        <label className="cozinheiro-horario"> 14:00 ~ 20:30</label>
                        <p className="cozinheiro-descricao">Olá, meu nome é Eduardo Lima, trabalho como chef de cozinha há 5 anos</p>
                    </div>

                    <div className="perfil-cozinheiro">
                        <img src={FotoCozinheiro2} className="perfil-cozinheiro2" />
                        <label className="cozinheiro-nome"> Jéssica Pereira</label>
                        <label className="cozinheiro-contato"> (45) X XXXX-XXXX </label>
                        <label className="cozinheiro-horario"> 13:00 ~ 20:00 </label>
                        <p className="cozinheiro-descricao"> Olá, meu nome é Jéssica Pereira, trabalho como chef de cozinha há 10 anos </p>
                    </div>
            </div>
        </div>
    );
}

export default ServicosCozinheiro;