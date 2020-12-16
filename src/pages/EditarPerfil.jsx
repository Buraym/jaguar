import React from 'react';
import '../styles/editarperfilstyle.css';
import { Link } from "react-router-dom";
import ImagemPerfilExemplo from '../assets/imagem perfil exemplo.jpg';
import SideBar from '../components/SideBar';

function EditarPerfil(){

    return(

        <div className="tela-editar-perfil">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-editar-perfil">
                <div className="camada1">
                    <div className="coluna1">
                        <img className="foto-perfil" src={ImagemPerfilExemplo} alt="Foto de Perfil"/>
                        <div className="dados">
                            <div className="caixa-identidade">
                                <label className="nome"> Nome Completo: </label>
                                <label className="idade"> Idade: </label>
                                <label className="cargo"> Cargo: </label>
                            </div>
                            <div className="caixa-input-editar">
                                <input type="text" className="input-editar-perfil" />
                                <input type="text" className="input-editar-perfil" />
                                <input type="text" className="input-editar-perfil" />
                            </div>
                        </div>
                    </div>
                    <div className="coluna2">
                        <div className="caixa-status">
                            <label> Status </label>
                        </div>
                        <div className="caixa-alugado">
                            <label> Item Alugado </label>
                        </div>
                    </div>
                </div>
                <div className="camada2ep">
                    <Link to="/perfil">
                        <button className="salvar-perfil">
                            <label className="salvar-perfil-texto"> Salvar Alterações </label>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default EditarPerfil;