import React from 'react';
import '../styles/sidebarstyle.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

function SideBar(){
    return(
        <Menu>

            <Link to="/home">
                <label > Inicio </label>
            </Link>

            <Link to="/perfil">
                <label > Perfil </label>
            </Link>

            <Link to="/reunioes">
                <label > Reuniões </label>
            </Link>

            <Link to="/eventos">
                <label > Eventos </label>
            </Link>

            <Link to="/servicos">
                <label > Serviços </label>
            </Link>

            <Link to="/classificados">
                <label className="classificados" > Classificados </label>
            </Link>

            <Link to="/funcionarios">
                <label > Funcionarios </label>
            </Link>

            <Link to="/contabilidade">
                <label > Contabilidade </label>
            </Link>

            <Link to="/">
                <label > Logout </label>
            </Link>
        </Menu>
    );
}

export default SideBar;
