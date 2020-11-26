import React from 'react';
import style from '../styles/loginstyle.css';
import CampoLoginSenha from '../components/CampoLoginSenha';

function Login() {

    return (

        <div className="fundo">

            <div className="caixalogo">

                <label className="logo"> Jaguar </label>

            </div>

            <CampoLoginSenha/>
            
        </div>  
      
    );

}

export default Login;