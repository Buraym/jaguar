import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/funcionariosstyle.css';
import SideBar from '../components/SideBar';
import CardFuncionario from '../components/CardFuncionario';
import FundoFuncionario from '../assets/imagem de fundo funcionario.jpg';
import FotoExemploFuncionario from '../assets/foto funcionario exemplo.jpg';
import FotoExemploFuncionario2 from '../assets/foto funcionario exemplo 2.jpg';
import FotoExemploFuncionario3 from '../assets/foto funcionario exemplo 3.jpg';
import FotoExemploFuncionario4 from '../assets/foto funcionario exemplo 4.jpg';
import FotoExemploFuncionario5 from '../assets/foto funcionario exemplo 5.jpg';
import FotoExemploFuncionario6 from '../assets/foto funcionario exemplo 6.jpg';
import AccountDefault from '../assets/baseline_account_circle_black_18dp.png';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DataFuncionarios from "../datafuncionarios.json"
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
//import { CenterFocusStrong } from '@material-ui/icons';

function Funcionarios(){

    const [adicionar, setAdicionar] = useState(false);
    const [foto, setFoto] = useState("");
    const [mount, setMount] = useState(false);
    const [nome, setNome] = useState(false);
    const [cargo, setCargo] = useState(false);
    const [escala, setEscala] = useState(false);
    const [salario, setSalario] = useState(false);
    const [status, setStatus] = useState(false);
    const [pendencias, setPendencias] = useState(false);
    const [ferias, setFerias] = useState(false);
    const [decimoterceiro, setDecimo] = useState(false);
    const [documentos, setDocumentos] = useState([]);
    
    var lista_nome = [];
    var lista_cargo = [];
    var lista_escala = [];
    var lista_salario = [];

    [DataFuncionarios].forEach((funcionario) => {
        for (var i in funcionario) {
            lista_nome.push(funcionario[i].nome);
            lista_cargo.push(funcionario[i].cargo);
            lista_escala.push(funcionario[i].escala);
            lista_salario.push(funcionario[i].salario);
        }
    });

    var funcionario_novo ={
        id: "XXXX",
        nome: nome,
        cargo: cargo,
        escala: escala,
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
        }
    }
    function HandleChangeCargo(e){
        if (mount !== true) {
            setCargo(e.target.value);
        }
    }
    function HandleChangeEscala(e){
        if (mount !== true) {
            setEscala(e.target.value);
        }
    }
    function HandleChangeSalario(e){
        if (mount !== true) {
            setSalario(e.target.value);
        }
    }
    function HandleChangeStatus(e){
        if (mount !== true) {
            setStatus(e.target.value);
        }
    }
    function HandleChangePendencias(e){
        if (mount !== true) {
            setPendencias(e.target.value);
        }
    }
    function HandleChangeFerias(e){
        if (mount !== true) {
            setFerias(e.target.value);
        }
    }
    function HandleChangeDecimo(e){
        if (mount !== true) {
            setDecimo(!decimoterceiro);
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
                console.log(content_image);
            }
        }
        input.click();
    }

    function AbrirDocumento(){
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
    }

    function HandleSubmit(e){
        var nome_fixo = nome;
        var cargo_fixo = cargo;
        var escala_fixo = escala;
        var salario_fixo = salario;
        var status_fixo = status;
        var pendencias_fixo = pendencias;
        var ferias_fixo = ferias;
        var decimo_fixo = decimoterceiro;
        funcionario_novo.nome = nome_fixo;
        funcionario_novo.cargo = cargo_fixo;
        funcionario_novo.escala = escala_fixo;
        funcionario_novo.salario = salario_fixo;
        funcionario_novo.status = status_fixo;
        funcionario_novo.pendencias = pendencias_fixo;
        funcionario_novo.ferias = ferias_fixo;
        funcionario_novo.decimoterceiro = decimo_fixo;
        const caixa = document.createElement("div");
        const caixa_notificacao_atual = document.getElementById("secao-cards");
        e.preventDefault();
    }

    return(
        <div className="tela-funcionarios">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios">
                <h1 className="titulo"> Equipe de Funcionarios </h1>
                <div id="secao-cards">
                    <CardFuncionario nomecard="card1" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario} nome={ lista_nome[0] } cargo={ lista_cargo[0] } escala={ lista_escala[0] } salario={ lista_salario[0] + " R$"}/>
                    <CardFuncionario nomecard="card2" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario2} nome={ lista_nome[1] } cargo={ lista_cargo[1] } escala={ lista_escala[1] } salario={ lista_salario[1] + " R$"}/>
                    <CardFuncionario nomecard="card3" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario3} nome={ lista_nome[2] } cargo={ lista_cargo[2] } escala={ lista_escala[2] } salario={ lista_salario[2] + " R$"}/>
                    <CardFuncionario nomecard="card4" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario4} nome={ lista_nome[3] } cargo={ lista_cargo[3] } escala={ lista_escala[3] } salario={ lista_salario[3] + " R$"}/>
                    <CardFuncionario nomecard="card5" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario5} nome={ lista_nome[4] } cargo={ lista_cargo[4] } escala={ lista_escala[4] } salario={ lista_salario[4] + " R$"}/>
                    <CardFuncionario nomecard="card6" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario6} nome={ lista_nome[5] } cargo={ lista_cargo[5] } escala={ lista_escala[5] } salario={ lista_salario[5] + " R$"}/>
                    <CardFuncionario nomecard="card4" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario4} nome={ lista_nome[3] } cargo={ lista_cargo[3] } escala={ lista_escala[3] } salario={ lista_salario[3] + " R$"}/>
                    <CardFuncionario nomecard="card5" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario5} nome={ lista_nome[4] } cargo={ lista_cargo[4] } escala={ lista_escala[4] } salario={ lista_salario[4] + " R$"}/>
                    <CardFuncionario nomecard="card6" fotofundo={FundoFuncionario} fotofuncionario={FotoExemploFuncionario6} nome={ lista_nome[5] } cargo={ lista_cargo[5] } escala={ lista_escala[5] } salario={ lista_salario[5] + " R$"}/>
                </div>
                <div>
                    <div className="cardfuncionario-adicionar">
                        <div className="funcionario-fundo-adicionar"></div>
                        <div className="funcionario-adicionar-foto" onClick={AbrirImagem}></div>
                            {
                                adicionar ?
                                    <div className="coluna-adicionar-funcionario">
                                        <form onSubmit={HandleSubmit}>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Nome" type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="RG" type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="CPF" type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Cargo" type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Escala </label>
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
                                            <div className="campo-input-adicionar-funcionario">
                                                <input placeholder="Salario" type="text" style={{ outline: "none" }}/>
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Escala </label>
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
                                                    onChange={HandleChangePendencias}
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Férias </label>
                                                <Switch
                                                    onChange={HandleChangeFerias}
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="campo-input-adicionar-funcionario">
                                                <label> Décimo Terceiro </label>
                                                <Switch
                                                    onChange={HandleChangeDecimo}
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="caixa-documentos-funcionario-adicionar">
                                                <label> Documentos </label>
                                                {
                                                    mount
                                                        ?
                                                            <div id="documentos-funcionario-adicionar"></div>
                                                        :
                                                            null
                                                }
                                                <button className="botao-documentos-funcionarios-adicionar" onClick={AbrirDocumento}>
                                                    <PostAddIcon />
                                                </button>
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