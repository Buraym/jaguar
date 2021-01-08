import React from 'react';
import '../styles/funcionariosescalasstyle.css';
import SideBar from '../components/SideBar';
import FotoExemploFuncionario from '../assets/foto funcionario exemplo.jpg';
import FotoExemploFuncionario2 from '../assets/foto funcionario exemplo 2.jpg';
import FotoExemploFuncionario3 from '../assets/foto funcionario exemplo 3.jpg';
import FotoExemploFuncionario4 from '../assets/foto funcionario exemplo 4.jpg';
import FotoExemploFuncionario5 from '../assets/foto funcionario exemplo 5.jpg';
import FotoExemploFuncionario6 from '../assets/foto funcionario exemplo 6.jpg';
import DataFuncionarios from "../datafuncionarios.json"

function FuncionariosEscalas(){

    var escala_diurna = [];
    var escala_noturna = [];
    var escala_integral = [];
    var escala_meio = [];
    var escala_estagio = [];

    [DataFuncionarios].forEach((funcionario) => {
        for (var i in funcionario) {
            if (funcionario[i].escala === "diurno") {
                escala_diurna.push(funcionario[i].nome);
            }
            if (funcionario[i].escala === "noturno") {
                escala_noturna.push(funcionario[i].nome);
            }
            if (funcionario[i].escala === "integral") {
                escala_integral.push(funcionario[i].nome);
            }
            if (funcionario[i].escala === "meio") {
                escala_meio.push(funcionario[i].nome);
            }
            if (funcionario[i].escala === "estagio") {
                escala_estagio.push(funcionario[i].nome);
            }
        }
    });

    //console.log(escala_diurna);
    console.log(escala_noturna);
    console.log(escala_integral);
    console.log(escala_meio);
    console.log(escala_estagio);

    return(
        <div className="tela-funcionarios-escalas">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-funcionarios-escalas">
                <div className="funcionarios-escalas-titulo-caixa">
                    <label className="funcionarios-escalas-titulo"> Escalas </label>
                </div>
                <div className="funcionarios-escalas-caixa">
                    <div className="escala-campo">
                    <label> Escala Diurna </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 4:00 até 14:00</label>
                            <label> Funcionarios: {escala_diurna + ", "}</label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario} alt="foto funcionario escala diurna"/>
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Noturna </label>
                        <div className="escala-descricao">
                            
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 18:00 até 6:00</label>
                            <label> Funcionarios:{
                                    escala_noturna.forEach( (nomes) => {
                                        for (var i in nomes) {
                                            if (nomes.length === 1) {
                                                <label>{nomes}</label>
                                            }
                                            else if (nomes[i] !== nomes[nomes - 1]) {
                                                <label>{nomes[i]}</label>
                                            } else {
                                                <label>{nomes[i]}</label>
                                            }
                                        }
                                    })
                                }
                            </label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario2} alt="foto funcionario escala noturna"/>
                            <img className="escala-funcionario2" src={FotoExemploFuncionario3} alt="foto funcionario escala noturna"/>
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Integral </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 6:00 até 16:00</label>
                            <label> Funcionarios:{
                                    escala_integral.forEach( (nomes) => {
                                        for (var i in nomes) {
                                            if (nomes.length === 1) {
                                                <label>{nomes}</label>
                                            }
                                            else if (nomes[i] !== nomes[nomes - 1]) {
                                                <label>{nomes[i]}</label>
                                            } else {
                                                <label>{nomes[i]}</label>
                                            }
                                        }
                                    })
                                }
                            </label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario4} alt="foto funcionario escala integral"/>
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Meio-periodo </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 8:00 até 12:00</label>
                            <label> Funcionarios:{escala_meio.forEach(
                                (nomes) => {
                                    for (var i in nomes) {
                                        if (nomes[i] !== nomes[nomes - 1]) {
                                            <label>{nomes[i] + ", "}</label>
                                        } else {
                                            <label>{nomes[i]}</label>
                                        }
                                    }
                                })}
                            </label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario5} alt="foto funcionario escala meio periodo"/>
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Estagio </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 10:00 até 18:00</label>
                            <label> Funcionarios:{escala_estagio.forEach(
                                (nomes) => {
                                    for (var i in nomes) {
                                        if (nomes[i] !== nomes[nomes - 1]) {
                                            <label>{nomes[i] + ", "}</label>
                                        } else {
                                            <label>{nomes[i]}</label>
                                        }
                                    }
                                })}
                            </label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario6} alt="foto funcionario escala estagio"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FuncionariosEscalas;