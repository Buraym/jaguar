import React from 'react';
import '../styles/sidebarstyle.css';
import { slide as Menu } from 'react-burger-menu';
import {Link, Redirect} from "react-router-dom";

function SideBar(props){

    if ((window.location.href === "localhost:3000/administracao") && (props.status !== "gerente")){
        return <Redirect to="/error404"/>
    }

    return(
        <Menu>
            {
                (props.status === "gerente")
                    ?
                        <Link to="/homegerente">
                            <label > Inicio </label>
                        </Link>
                    :
                        <Link to="/home">
                            <label > Inicio </label>
                        </Link>
            }
            <Link to="/perfil">
                <label > Perfil </label>
            </Link>
            {
                (props.status === "gerente")
                    ?
                        <Link to="/reunioesgerente">
                            <label > Reuniões </label>
                        </Link>
                    :
                        <Link to="/reunioes">
                            <label > Reuniões </label>
                        </Link>
            }
            <Link to="/eventos">
                <label > Eventos </label>
            </Link>
            {
                (props.status === "gerente")
                    ?
                        <Link to="/servicogerente">
                            <label > Serviços </label>
                        </Link>
                    :
                        <Link to="/servicos">
                            <label > Serviços </label>
                        </Link>
            }
            {
                (props.status !== "gerente")
                    ?
                        <Link to="/classificados">
                            <label className="classificados" > Classificados </label>
                        </Link>
                    :
                        null
            }
            {
                (props.status === "gerente")
                    ?
                        <Link to="/funcionarios">
                            <label > Funcionários </label>
                        </Link>
                    :
                        null
            }
            {
                (props.status === "gerente")
                    ?
                        <Link to="/administracao">
                            <label > Administração </label>
                        </Link>
                    :
                        null
            }
            <Link to="/">
                <label > Sair </label>
            </Link>
        </Menu>
    );
}

export default SideBar;
