import React from "react";
import '../styles/flechastyle.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function FlechaEsquerda(props){
    return (
        <div>
            <ChevronLeftIcon className="flecha-esquerda" fontSize="large"/>
        </div>
    );
}

export default FlechaEsquerda;