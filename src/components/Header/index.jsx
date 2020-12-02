import React from 'react'
import Menu from '../Menu/index'
import '../Header/header.css'
import Barra from '../Barra'
import Opcoes from '../Opcoes'
import IconLabelButton from '../IconLabelButton'

function Header(){
    return (
        <div className="container">
           <div className="icone">
            <IconLabelButton />
            </div>
            <Menu />
            <Barra />
            <Opcoes />
        </div>
    );
}
export default Header;