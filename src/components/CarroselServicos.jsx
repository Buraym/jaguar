import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/_slick.scss"; 
import "../styles/_slick-theme.scss";
import FlechaDireita from '../components/FlechaDireita';
import FlechaEsquerda from '../components/FlechaEsquerda';
import CardServico from '../components/CardServico';
import Foto1 from '../assets/sugerir-card.jpg';
import Foto2 from '../assets/sugerir-card2.jpg';
import Foto3 from '../assets/sugerir-card3.jpg';
import Foto4 from '../assets/sugerir-card4.jpg';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <FlechaDireita />,
        prevArrow: <FlechaEsquerda />,
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <CardServico
                    foto={Foto1}
                    nome="Jenifer Santos"
                    contato="(45) 9 9090-9090"
                    horario="8:00 ~ 18:00"
                    descricao=""
                />
            </div>
            <div>
                <CardServico
                    foto={Foto2}
                    nome="Oswaldo Ribeiro"
                    contato="(45) 9 9090-9090"
                    horario="8:00 ~ 18:00"
                    descricao=""
                />
            </div>
            <div>
                <CardServico
                    foto={Foto3}
                    nome="Flavia Ristini"
                    contato="(45) 9 9090-9090"
                    horario="8:00 ~ 18:00"
                    descricao=""
                />
            </div>
            <div>
                <CardServico
                    foto={Foto4}
                    nome="Pedro Cardozo"
                    contato="(45) 9 9090-9090"
                    horario="8:00 ~ 18:00"
                    descricao=""
                />
            </div>
          </Slider>
        </div>
      );
    }
  }