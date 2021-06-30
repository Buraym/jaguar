import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/funcionariosstyle.css';
import SideBar from '../components/SideBar';
import CardFuncionario from '../components/CardFuncionario';
import FundoFuncionario from '../assets/imagem de fundo funcionario.jpg';
import FotoExemploFuncionario from '../assets/foto funcionario exemplo.jpg';
import AccountDefault from '../assets/baseline_account_circle_black_18dp.png';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DataFuncionarios from "../datafuncionarios.json"
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import api from '../api.js';
import { useEffect } from 'react';
import {Cloudinary} from 'cloudinary-core';

function Funcionarios(){

    const [adicionar, setAdicionar] = useState(false);
    const [foto, setFoto] = useState("");
    const [cheio, setCheio] = useState(false);
    const [mount, setMount] = useState(false);
    const [nome, setNome] = useState(false);
    const [rg, setRg] = useState(false);
    const [telefone, setTelefone] = useState(false);
    const [cargo, setCargo] = useState(false);
    const [salario, setSalario] = useState(false);
    const [area, setArea] = useState(false);
    const [turno, setTurno] = useState(false);
    const [status, setStatus] = useState(false);
    const [pendencias, setPendencias] = useState(false);
    const [ferias, setFerias] = useState(false);
    const [decimoterceiro, setDecimo] = useState(false);
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {

        const response = api.get("funcionarios")

        .then(
            response => {
                setFuncionarios(response.data)
                if (funcionarios.length == 0){
                    setCheio(false);
                    console.log(cheio)
                } else {
                    setCheio(true);
                    console.log(cheio)
                }
            }
        )
        
    }, []);

    console.log(funcionarios)

    var funcionario_novo ={
        nome: nome,
        cargo: cargo,
        telefone: telefone,
        area: area,
        turno: turno,
        salario: salario,
        status: status,
        pendencias: pendencias,
        ferias: ferias,
        decimoterceiro: decimoterceiro
    }

    const marcas_escala = [
        {
          value: 0,
          label: 'D',
        },
        {
          value: 25,
          label: 'N',
        },
        {
          value: 50,
          label: 'I',
        },
        {
          value: 75,
          label: 'M',
        },
        {
            value:100,
            label: 'E',
        }
    ];

    const marcas_status = [
        {
            value: 0,
            label: 'Empregado',
        },
        {
            value: 50,
            label: 'Estagio',
        },
        {
            value: 100,
            label: 'Avaliação'
        }
    ];

    function valuetext(value) {
        return `${value}°`;
    }

    function HandleChangeNome(e){
        if (mount !== true){
            setNome(e.target.value);
            console.log(e.target.value);
        }
    }

    function HandleChangeRg(e){
        if (mount !== true){
            setRg(e.target.value);
            console.log(e.target.value);
        }
    }

    function HandleChangeTelefone(e){
        if (mount !== true){
            setTelefone(e.target.value);
            console.log(e.target.value);
        }
    }

    function HandleChangeCargo(e){
        if (mount !== true) {
            setCargo(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangeArea(e){
        if (mount !== true) {
            setArea(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangeTurno(e){
        if (mount !== true) {
            setTurno(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangeSalario(e){
        if (mount !== true) {
            setSalario(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangeStatus(e){
        if (mount !== true) {
            setStatus(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangePendencias(e){
        if (mount !== true) {
            setPendencias(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangeFerias(e){
        if (mount !== true) {
            setFerias(e.target.value);
            console.log(e.target.value);
        }
    }
    function HandleChangeDecimo(e){
        if (mount !== true) {
            setDecimo(!decimoterceiro);
            console.log(e.target.value);
        }
    }

    function AbrirImagem(){
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => { 
            var file = e.target.files[0]; 
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = readerEvent => {
                var content = readerEvent.target.result;
                var content_image = 'url('+ content +')';
                setFoto(content_image);
                document.querySelector('.funcionario-adicionar-foto').style.backgroundImage = 'url('+ content +')';
                console.log(content);
                Cloudinary.toString();
            }
        }
        input.click();
    }

    /*function AbrirDocumento(){
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => {
            let file_document = Array.from(input.files);
            setDocumentos([...documentos, file_document]);
            console.log(documentos);
            if (mount === false) {
                setMount(true);
            }
            const documento_icone = document.createElement("div");
            const caixa_documentos_atual = document.getElementById("documentos-funcionario-adicionar");
            ReactDOM.render(<DescriptionIcon style={{"color":"#f48c06"}}/>, documento_icone);
            caixa_documentos_atual.appendChild(documento_icone);
        }
        input.click();
    }*/

    function SwitchCheck(string){
        if (string === "on"){
            return true;
        } else {
            return false;
        }
    }

    function HandleSubmit(e){
        
        
        funcionario_novo.nome = nome;
        funcionario_novo.cargo = cargo;
        funcionario_novo.turno = turno;
        funcionario_novo.salario = salario;
        funcionario_novo.status = status;
        funcionario_novo.pendencias = pendencias;
        funcionario_novo.ferias = ferias;
        funcionario_novo.decimoterceiro = decimoterceiro;


        e.preventDefault();
    }

    funcionarios.forEach((funcionario, x) => (
        funcionario = funcionarios[x],
        console.log(funcionario.id, funcionario.nome, funcionario.cargo, funcionario.foto, funcionario.salario, funcionario.turno)
    ))

    {/*funcionarios.forEach((funcionario, x) => (
        funcionario_atual = "<CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={" + funcionario.nome + "} cargo={" + funcionario.cargo + "} escala={" + funcionario.escala + "} salario={" + funcionario.salario + "}/>",
        tag_id = document.getElementById('secao-cards'),
        tag_id.innerHTML = funcionario_atual
        )
    )*/}

    {/*() => {     
                            funcionarios.map((funcionario,funcionario_string, x) => (
                                funcionario = funcionarios[x],
                                funcionario_string = '<CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={funcionario.nome} cargo={funcionario.cargo} escala={funcionario.escala} salario={funcionario.salario}/>',
                                document.getElementById("secao-cards").insertAdjacentHTML('beforebegin', funcionario_string),
                                console.log(cheio)
                            ))
                        }*/}
                        
    /**/

    return(
        <div className="tela-funcionarios">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios">
                <h1 className="titulo"> Equipe de Funcionarios </h1>
                <li id="secao-cards"></li>
                {
                    cheio ?

                        <CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={funcionarios[0].nome} cargo={funcionarios[0].cargo} escala={funcionarios[0].turno} salario={funcionarios[0].salario}/>


                        /*() => {     
                            funcionarios.map((funcionario,funcionario_string, x) => (
                                funcionario = funcionarios[x],
                                funcionario_string = '<CardFuncionario fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={funcionario.nome} cargo={funcionario.cargo} escala={funcionario.escala} salario={funcionario.salario}/>',
                                document.getElementById("secao-cards").insertAdjacentHTML('beforebegin', funcionario_string),
                                console.log(funcionario)
                            ))
                        }*/
                        

                    :
                        <h3>Nenhum funcionario cadastrados</h3>
                        
                }
                <div>
                    <div className="cardfuncionario-adicionar">
                        <div className="funcionario-fundo-adicionar"></div>
                        <div className="funcionario-adicionar-foto" onClick={AbrirImagem}></div>
                            {
                                adicionar ?
                                    <div className="coluna-adicionar-funcionario">
                                        <form onSubmit={HandleSubmit}>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Nome" id="nome" onChange={HandleChangeNome} type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="RG" id="rg" onChange={HandleChangeRg} type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Telefone" id="telefone"  onChange={HandleChangeTelefone} type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Cargo" id="cargo"  onChange={HandleChangeCargo} type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Salario" id="salario"  onChange={HandleChangeSalario} type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Area" id="area"  onChange={HandleChangeArea} type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario-2">
                                                <label> Turno do Expediente </label>
                                                <Slider
                                                    defaultValue={0}
                                                    track={false}
                                                    getAriaValueText={ marcas_escala.value }
                                                    aria-labelledby="discrete-slider"
                                                    valueLabelDisplay={ marcas_escala.label }
                                                    step={null}
                                                    marks={marcas_escala}
                                                />
                                            </div>
                                            
                                            <div className="campo-input-adicionar-funcionario-2">
                                                <label> Status do Funcionario </label>
                                                <Slider
                                                    defaultValue={0}
                                                    track={false}
                                                    getAriaValueText={ marcas_status.value }
                                                    aria-labelledby="discrete-slider"
                                                    valueLabelDisplay={ marcas_status.label }
                                                    step={null}
                                                    marks={marcas_status}
                                                />
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Pêndencias </label>
                                                <Switch
                                                    id="pendencias"
                                                    onChange={HandleChangePendencias}
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Férias </label>
                                                <Switch
                                                    id="ferias"
                                                    onChange={HandleChangeFerias}
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Décimo Terceiro </label>
                                                <Switch
                                                    id="decimo"
                                                    onChange={HandleChangeDecimo}
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input className="botao-concluir-funcionario" type="submit"/>
                                            </div>
                                        </form>
                                    </div>
                                :
                                    <div className="caixa-acoes">
                                        <button
                                            className="adicionar"
                                            onClick={
                                                () => { 
                                                    setAdicionar(true)
                                                    
                                                }
                                        }>
                                            <PersonAddRoundedIcon />
                                        </button>
                                    </div>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Funcionarios;