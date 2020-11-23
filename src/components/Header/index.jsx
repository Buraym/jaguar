import React from 'react'
import Menu from '../Menu/index'
import '../Header/header.css'
import Barra from '../Barra'
import Opcoes from '../Opcoes'

function Header(){
    return (
        <div className="container">
            <Menu />
            <Barra />
            <Opcoes />
        </div>
    );
}
export default Header;