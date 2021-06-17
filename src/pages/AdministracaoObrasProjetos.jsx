import React, { useState } from 'react';
import '../styles/projetostyle.css';
import SideBar from '../components/SideBar';
import CardObra from '../components/CardObra';
import FotoFundo from '../assets/planta-baixa-exemplo.jpg';
import GetAppIcon from '@material-ui/icons/GetApp';

function AdministracaoObrasProjetos(){

    const [planta, setPlanta] = useState("");
    /*const [nome, setNome] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [tempo, setTempo] = useState("");
    const [custo, setCusto] = useState("");*/

    /*var caixa_projeto ={
        planta: planta,
        nome: nome,
        empresa: empresa,
        tempo: tempo,
        custo: custo,
        funcionarios: []
    }*/

    /*function handleChangeNome(e){
        setNome(e.target.value);
    }

    function handleChangeEmpresa(e){
        setEmpresa(e.target.value);
    }

    function handleChangeTempo(e){
        setTempo(e.target.value);
    }

    function handleChangeCusto(e){
        setCusto(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
    }*/

    function LoadImage(){
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => { 
            var file = e.target.files[0]; 
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = readerEvent => {
                var content = readerEvent.target.result;
                var content_image = 'url('+ content +')';
                setPlanta(content_image);
                document.querySelector('.planta-projeto').style.backgroundImage = 'url('+ content +')';
                console.log(planta);
            }

        }
        input.click();
    }

    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao-obras">
                <div className="card-projeto">
                    <div className="planta-projeto-add"></div>
                    <button className="botao-projeto" onClick={LoadImage}>
                        <GetAppIcon />
                    </button>
                    <div className="caixa-projeto">
                        <form onSubmit="">
                            <div className="caixa-projeto-input">
                                Nome: 
                                <input className="input-projeto" type="text"/>
                            </div>
                            <div className="caixa-projeto-input">
                                Empresa: 
                                <input className="input-projeto" type="text"/>
                            </div>
                            <div className="caixa-projeto-input">
                                CNPJ Empresa: 
                                <input className="input-projeto" type="text"/>
                            </div>
                            <div className="caixa-projeto-input">
                                Custo:
                                <input className="input-projeto" type="text"/>
                            </div>
                            <div className="caixa-projeto-input">
                                tempo:
                                <input className="input-projeto" type="text"/>
                            </div>
                            <div className="caixa-projeto-input">
                                funcionarios:
                                <input className="input-projeto" type="text"/>
                            </div>
                            <label>
                                Funcionarios:
                                {}
                            </label>
                            <div className="caixa-projeto-input">
                                Custo:
                                <input className="input-projeto" type="text" onChange=""/>
                            </div>
                            <div className="caixa-projeto-input">
                                <input className="" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                <CardObra fotofundo={FotoFundo} nome="Restauração do Parquinho" empresa="Contruções Petrovicks SA" tempo="3 meses" custo="50.000 R$"/>
                <CardObra fotofundo={FotoFundo} nome="Restauração do Parquinho" empresa="Contruções Petrovicks SA" tempo="3 meses" custo="50.000 R$"/>
            </div>
        </div>
    );
}

export default AdministracaoObrasProjetos;