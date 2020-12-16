import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/_slick.scss"; 
import "../styles/_slick-theme.scss";
import FlechaDireita from '../components/FlechaDireita';
import FlechaEsquerda from '../components/FlechaEsquerda';
import CardEvento from '../components/CardEvento';
import Foto from '../assets/foto evento adoção.jpg';
import Foto2 from '../assets/ano novo.jpg';
import Foto3 from '../assets/casamento.jpg';
import Foto4 from '../assets/festa.jpg';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <FlechaDireita />,
        prevArrow: <FlechaEsquerda />
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
          </Slider>
        </div>
      );
    }
  }