import React from 'react';
import '../styles/funcionariosescalasstyle.css';
import SideBar from '../components/SideBar';
import FotoExemploFuncionario from '../assets/foto funcionario exemplo.jpg';
import FotoExemploFuncionario2 from '../assets/foto funcionario exemplo 2.jpg';
import FotoExemploFuncionario3 from '../assets/foto funcionario exemplo 3.jpg';
import FotoExemploFuncionario4 from '../assets/foto funcionario exemplo 4.jpg';
import FotoExemploFuncionario5 from '../assets/foto funcionario exemplo 5.jpg';
import FotoExemploFuncionario6 from '../assets/foto funcionario exemplo 6.jpg';

function Contabilidade(){
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
                            <label> Funcionarios: Samantha Barbosa</label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario} />
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Noturna </label>
                        <div className="escala-descricao">
                            
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 18:00 até 6:00</label>
                            <label> Funcionarios: Sergio Cabral, Maria Helena</label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario2} />
                            <img className="escala-funcionario2" src={FotoExemploFuncionario3} />
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Integral </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 6:00 até 16:00</label>
                            <label> Funcionarios: Otávio Sandiego</label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario4} />
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Meio-periodo </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 8:00 até 12:00</label>
                            <label> Funcionarios: Felipe Chaves</label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario5} />
                        </div>
                    </div>

                    <div className="escala-campo">
                        <label> Escala Estagio </label>
                        <div className="escala-descricao">
                            <label> Dias: Segunda á sexta</label>
                            <label> Horario: 10:00 até 18:00</label>
                            <label> Funcionarios: Suzana Pires</label>
                        </div>
                        <div className="escala-funcionarios">
                            <img className="escala-funcionario" src={FotoExemploFuncionario6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contabilidade;