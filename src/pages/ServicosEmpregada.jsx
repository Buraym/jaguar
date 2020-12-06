import React from 'react';
import '../styles/servicoempregadastyle.css';
import SideBar from '../components/SideBar';
import FotoEmpregada1 from '../assets/empregado1.jpg';
import FotoEmpregada2 from '../assets/empregada2.jpg';

function ServicosEmpregada(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-empregada">
                <div className="perfil-empregada">
                        <img src={FotoEmpregada1} className="perfil-empregada1" />
                        <label className="empregada-nome">Pedro Sergio Alvarez</label>
                        <label className="empregada-contato">(45) X XXXX-XXXX</label>
                        <label className="empregada-horario"> 8:00 ~ 18:00 </label>
                        <p className="empregada-descricao"> Olá, meu nome é Pedro Sergio Alvarez, eu sou empregado doméstico e estou nesse ramo fazem 25 anos </p>
                    </div>

                    <div className="perfil-empregada">
                        <img src={FotoEmpregada2} className="perfil-empregada2" />
                        <label className="empregada-nome"> Estefani Almeida</label>
                        <label className="empregada-contato">(45) X XXXX-XXXX</label>
                        <label className="empregada-horario"> 6:00 ~ 16:00 </label>
                        <p className="empregada-descricao">Olá, meu nome é Estefani Almeida, eu sou empregada doméstica e estou nesse ramo fazem 15 anos</p>
                    </div>
            </div>
        </div>
    );
}

export default ServicosEmpregada;