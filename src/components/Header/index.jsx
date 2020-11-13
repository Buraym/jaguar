import React from 'react'
import Menu from '../Menu/index'
import '../Header/header.css'
import Barra from '../Barra'
import Opcoes from '../Opcoes'
import Segunda from '../../Segunda'

function Header(){
    return (
        <div className="container">
            <Menu />
            <Barra />
            <Opcoes />
            <Segunda />
        </div>
    );
}
export default Header;