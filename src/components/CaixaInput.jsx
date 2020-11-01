import React from 'react';
import '../styles/CaixaInput.css';

function CaixaInput(props) {

    return (

        <>

            <div className="Caixa">

                <label className="tag"> {props.tag}: </label>

                <input type="text" className="caixa_tag_input"/>

            </div>

        </>  
      
    );

}

export default CaixaInput;