import React, { useState } from 'react';
import '../styles/servicogerentestyle.css';
import SideBar from '../components/SideBar';
import Foto1 from '../assets/sugerir-card.jpg';
import Foto2 from '../assets/sugerir-card2.jpg';
import Foto3 from '../assets/sugerir-card3.jpg';
import Foto4 from '../assets/sugerir-card4.jpg';
import CardServico from '../components/CardServico';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ServicosData from '../servicos.json';

function ServicosGerente(){

    var lista_cards = ["awdaw", "awdawdaw", "awdwdawd"];
    const [pagina, setPagina] = useState(0);

    var lista_nome = [];
    var lista_telefone = [];
    var lista_horario = [];
    var lista_descricao = [];
    var lista_perfis = [];
    console.log(ServicosData[5]);

    return(
        <div className="tela-servicos">
            <div classname="aba">
                <SideBar />
            </div>
            <div className="conteudo-servicos-gerente">
                <div className="card-foco">
                    {
                        (pagina !== 0) ?
                            <button>
                                <ChevronLeftIcon className="botao-servico-gerente" onClick={() => {setPagina(pagina - 1)}}/>
                            </button>
                        :
                            null
                    }
                    {/*
                        () =>{
                            ServicosData[5].forEach(
                                (profissionais) => {
                                    for(var i in profissionais){
                                        lista_nome.push(profissionais[i]);
                                        lista_telefone.push(profissionais[i]);
                                        lista_horario.push(profissionais[i]);
                                        lista_descricao.push(profissionais[i]);
                                    }
                                }
                            )
                        }
                    */}
                    {
                        (pagina === 0)
                            ?
                                <CardServico foto={Foto1} nome="teste 1" contato="teste 1" horario="teste 1" area="jardinaria" tipo="gerente" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam vel odio pellentesque porttitor. Maecenas vitae ligula tempus, bibendum ex eu, fringilla orci. Donec volutpat orci eu quam vulputate vestibulum. Aenean sit amet placerat sem. Maecenas semper euismod nunc, sed imperdiet purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ornare diam vitae consequat maximus. Nam vel sem tristique, interdum quam in, eleifend nunc. Nam mattis augue ac velit elementum congue. Cras sollicitudin velit eros, a interdum mi hendrerit eget. Donec fringilla, dui a fermentum elementum, leo ex pharetra lorem, ut tincidunt ligula purus ac arcu. Morbi in sem nulla. Curabitur pretium a enim nec elementum. Proin sed pellentesque velit. Nullam sed pellentesque velit, ut dapibus est. Donec lacinia ullamcorper ligula, non sodales tortor malesuada in."/>
                            :
                                null
                    }
                    {
                        (pagina === 1)
                            ?
                                <CardServico foto={Foto2} nome="teste 1" contato="teste 1" horario="teste 1" area="encanamento" tipo="gerente" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam vel odio pellentesque porttitor. Maecenas vitae ligula tempus, bibendum ex eu, fringilla orci. Donec volutpat orci eu quam vulputate vestibulum. Aenean sit amet placerat sem. Maecenas semper euismod nunc, sed imperdiet purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ornare diam vitae consequat maximus. Nam vel sem tristique, interdum quam in, eleifend nunc. Nam mattis augue ac velit elementum congue. Cras sollicitudin velit eros, a interdum mi hendrerit eget. Donec fringilla, dui a fermentum elementum, leo ex pharetra lorem, ut tincidunt ligula purus ac arcu. Morbi in sem nulla. Curabitur pretium a enim nec elementum. Proin sed pellentesque velit. Nullam sed pellentesque velit, ut dapibus est. Donec lacinia ullamcorper ligula, non sodales tortor malesuada in."/>
                            :
                                null
                    }
                    {
                        (pagina === 2)
                            ?
                                <CardServico foto={Foto3} nome="teste 1" contato="teste 1" horario="teste 1" area="jardinaria" tipo="gerente" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam vel odio pellentesque porttitor. Maecenas vitae ligula tempus, bibendum ex eu, fringilla orci. Donec volutpat orci eu quam vulputate vestibulum. Aenean sit amet placerat sem. Maecenas semper euismod nunc, sed imperdiet purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ornare diam vitae consequat maximus. Nam vel sem tristique, interdum quam in, eleifend nunc. Nam mattis augue ac velit elementum congue. Cras sollicitudin velit eros, a interdum mi hendrerit eget. Donec fringilla, dui a fermentum elementum, leo ex pharetra lorem, ut tincidunt ligula purus ac arcu. Morbi in sem nulla. Curabitur pretium a enim nec elementum. Proin sed pellentesque velit. Nullam sed pellentesque velit, ut dapibus est. Donec lacinia ullamcorper ligula, non sodales tortor malesuada in."/>
                            :
                                null
                    }
                    {
                        (pagina === 3)
                            ?
                            <CardServico foto={Foto4} nome="teste 1" contato="teste 1" horario="teste 1" area="encanamento" tipo="gerente" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam vel odio pellentesque porttitor. Maecenas vitae ligula tempus, bibendum ex eu, fringilla orci. Donec volutpat orci eu quam vulputate vestibulum. Aenean sit amet placerat sem. Maecenas semper euismod nunc, sed imperdiet purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ornare diam vitae consequat maximus. Nam vel sem tristique, interdum quam in, eleifend nunc. Nam mattis augue ac velit elementum congue. Cras sollicitudin velit eros, a interdum mi hendrerit eget. Donec fringilla, dui a fermentum elementum, leo ex pharetra lorem, ut tincidunt ligula purus ac arcu. Morbi in sem nulla. Curabitur pretium a enim nec elementum. Proin sed pellentesque velit. Nullam sed pellentesque velit, ut dapibus est. Donec lacinia ullamcorper ligula, non sodales tortor malesuada in."/>
                            :
                                null
                    }
                    {
                        (pagina !== 3) ?
                            <button className="botao-servico-gerente">
                                <ChevronRightIcon onClick={() => {setPagina(pagina + 1)}}/>
                            </button>
                        :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default ServicosGerente;