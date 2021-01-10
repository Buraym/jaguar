import React from 'react';
import '../styles/servicosstyle.css';
import SideBar from '../components/SideBar';
import CarroselServicos from '../components/CarroselServicos';

function Servicos(){

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div>
                <CarroselServicos />
            </div>
        </div>
    );
}

export default Servicos;