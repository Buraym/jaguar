import React from 'react';
import '../styles/eventosstyle.css';
import SideBar from '../components/SideBar';
import CardEvento from '../components/CardEvento';
import Foto from '../assets/foto evento adoção.jpg';
import Foto2 from '../assets/ano novo.jpg';
import Foto3 from '../assets/casamento.jpg';
import Foto4 from '../assets/festa.jpg';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Eventos(){

    return(
        <div className="tela-evento">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-evento">
                <div>
                    <h1> Eventos </h1>
                </div>
                <div className="secao-cards-eventos">
                    <CardEvento
                        imagem={Foto}
                        fallback="Adoção de pets"
                        nome="Feira de Adoção de animais de estimação"
                        descricao={ null }
                        local="Avenida Silvio Américo Sasdeli, 1234, perto do Subway"
                        dia="27"
                        mes="12"
                        hora="18:30"
                    />
                    <CardEvento
                        imagem={Foto2}
                        fallback="Ano Novo"
                        nome="Ano novo 2021"
                        descricao={ null }
                        local="Avenida Silvio Américo Sasdeli, 1234, perto do Subway"
                        dia="32"
                        mes="12"
                        hora="23:30"
                    />
                    <CardEvento
                        imagem={Foto3}
                        fallback="Casamento"
                        nome="Casamento do Pedrinho com a Luciana"
                        descricao={ null }
                        local="Avenida Silvio Américo Sasdeli, 1234, perto do Subway"
                        dia="05"
                        mes="01"
                        hora="20:30"
                    />
                    <CardEvento
                        imagem={Foto4}
                        fallback="Festa Rave"
                        nome="Festa Rave open-mix"
                        descricao={ null }
                        local="Avenida Silvio Américo Sasdeli, 1234, perto do Subway"
                        dia="27"
                        mes="12"
                        hora="21:30"
                    />
                </div>
            </div>
        </div>
    );
}

export default Eventos;