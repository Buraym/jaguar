import React from 'react';
import '../styles/sidebarstyle.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

function SideBar(){
    return(
        <Menu>

            <Link to="/">
                <label className="inicio" > Inicio </label>
            </Link>

            <Link to="/perfil">
                <label className="perfil" > Perfil </label>
            </Link>

            <Link to="/reunioes">
                <label className="reunioes" > Reuniões </label>
            </Link>

            <label className="eventos" > Eventos </label>

            <label className="servicos" > Serviços </label>

            <label className="classificados" > Classificados </label>

            <Link to="/funcionarios">
                <label className="funcionarios" > Funcionarios </label>
            </Link>
            
            <label className="contabilidade" > Contabilidade </label>

            <Link to="/login">
                <label className="logout" > Logout </label>
            </Link>
        </Menu>
    );
}

export default SideBar;
