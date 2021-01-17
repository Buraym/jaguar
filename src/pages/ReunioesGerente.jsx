import React, { useEffect } from 'react';
import '../styles/reunioesgerentestyle.css';
import SideBar from '../components/SideBar';
import reunioes from '../reunioes.json';

function ReunioesGerente(){
    
    var lista_titulo = [];
    var lista_horario = [];
    var lista_sindico = [];
    var lista_apresentador = [];

    [reunioes].forEach( (reuniao) => {
        for (var i in reuniao) {
            lista_titulo.push(reuniao[i].titulo);
            lista_horario.push(reuniao[i].horario);
            lista_sindico.push(reuniao[i].sindico);
            lista_apresentador.push(reuniao[i].apresentador);
        }
    });

    function ListaReunioes(){
        useEffect(() => {
            for (var i in reunioes) {
                
                <div>
                    <label> { reunioes[i].titulo } </label>
                    <label> { reunioes[i].horario } </label>
                    <label> { reunioes[i].sindico } </label>
                    <label> { reunioes[i].apresentar } </label>
                </div>
                
            }
        })
    }

    console.log(lista_titulo + lista_horario + lista_sindico + lista_apresentador);

    return(
        <div className="telareunioes">
            <div>
                <SideBar />
            </div>
            <div className="conteudo-reunioes-gerente">
                <div className="iniciar-reuniao">
                    <button className="botao-reuniao-iniciar"> Reunião Nº 3 </button>
                </div>
                <div className="reunioes-anteriores">
                    { ListaReunioes }
                </div>
            </div>
        </div>

    );
}

export default ReunioesGerente;