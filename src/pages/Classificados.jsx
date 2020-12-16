import React from 'react';
import '../styles/classificadosstyle.css';
import SideBar from '../components/SideBar';
import {Link} from "react-router-dom";
import KitchenIcon from '@material-ui/icons/Kitchen';
import HomeIcon from '@material-ui/icons/Home';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import EventSeatIcon from '@material-ui/icons/EventSeat'
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import SearchIcon from '@material-ui/icons/Search';

function Classificados(){

    return(
        <div className="tela-classificados">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-classificados">

                <div className="classificados-titulo">
                    <label>Classificados</label>
                </div>

                <button className="classificados-botao-utensilios">
                    <label className="classificados-texto-utensilios">Utensilios Domésticos</label>
                    <HomeIcon className="classificados-icone-utensilios"/>
                </button>

                <button className="classificados-botao-maquinas">
                    <label className="classificados-texto-maquinas">Maquinas de Limpeza</label>
                    <KitchenIcon className="classificados-icone-maquinas"/>
                </button>

                <button className="classificados-botao-vagas">
                    <label className="classificados-texto-vagas">Vagas de estacionamento</label>
                    <LocalParkingIcon className="classificados-icone-vagas"/>
                </button>

                <button className="classificados-botao-moveis">
                    <label className="classificados-texto-moveis">Moveis</label>
                    <EventSeatIcon className="classificados-icone-moveis"/>
                </button>

                <button className="classificados-botao-procurar">
                    <label className="classificados-texto-procurar">Procurar</label>
                    <SearchIcon className="classificados-icone-procurar"/>
                </button>

                <button className="classificados-botao-adicionar">
                    <label className="classificados-texto-adicionar"> Sugerir Classificado </label>
                    <LibraryAddCheckIcon className="classificados-icone-adicionar"/>
                </button>

            </div>
        </div>
    );
}

export default Classificados;