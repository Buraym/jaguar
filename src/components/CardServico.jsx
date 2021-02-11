import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/cardservicostyle.css';
import EcoIcon from '@material-ui/icons/Eco';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import HouseIcon from '@material-ui/icons/House';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import MoreIcon from '@material-ui/icons/More';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function CardServico(props){

    {/*const area = props.area;*/}

    {/*switch(props.area){
        case("jardinaria"):
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<EcoIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break
        case("encanamento"):
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<BuildSharpIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break;
        case("empregada"):
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<HouseIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break;
        case("baba"):
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<ChildFriendlyIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break;
        case("cozinheiro"):
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<FastfoodSharpIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break;
        case("outro"):
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<MoreIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break;
        default:
                var caixa = document.createElement("div");
                var tipo_de_area_caixa = document.getElementById("perfil-servico-nome");
                ReactDOM.render(<MoreIcon />, caixa);
                tipo_de_area_caixa.appendChild(caixa);
                break;
    }*/}

    return(
        <div className="card-perfil-servico">
            <div className="card-perfil-superior">
                <img src={props.foto} className="perfil-servico-foto"/>
                <div className="card-perfil-dados">
                    <label id="perfil-servico-nome">
                        {props.nome}
                        {/*{
                        () => {
                            if(area === "jardineiro"){
                                <EcoIcon />
                            }
                            else{
                                <EcoIcon />
                            }
                        }
                    }*/}
                        {
                            (props.area === "jardinaria")
                                ?
                                    <EcoIcon />
                                :
                                    null
                        }
                        {
                            (props.area === "encanamento")
                                ?
                                    <BuildSharpIcon />
                                :
                                    null
                        }
                    </label>
                    {/*{
                        () => {
                            if(area === "jardineiro"){
                                <EcoIcon />
                            }
                            else{
                                <EcoIcon />
                            }
                        }
                    }*/}
                    <label className="perfil-servico-contato"> {props.contato} </label>
                    <label className="perfil-servico-horario"> {props.horario} </label>
                </div>
            </div>
            <p className="perfil-servico-descricao"> {props.descricao} </p>
            {
                (props.tipo === "gerente")
                    ?
                        <div className="caixa-avaliacao-servico">
                            <button className="botao-aceitar-servico">
                                <ThumbUpIcon/>
                            </button>
                            <button className="botao-negar-servico">
                                <ThumbDownIcon/>
                            </button>
                        </div>
                    :
                        null
                
            }
        </div>
    );
}

export default CardServico;