import React,{useState} from 'react'
import './segunda.css'

function Segunda() {
    const [lastComentario,setLastComentario]=useState()
    const send=(e) => {
        console.log(e.target.value)
        if (e.charCode===13){
            setLastComentario(e.target.value)
        }
    }
    
    return(
        <div className="painel">
            <label htmlFor="" className="insira">Insira seu comentario e pressione enter para enviar </label>
            <input onKeyPress={(e)=>send(e)} type="text" className="segunda" defaultValue={lastComentario} placeholder="Insira aqui seu comentario"/>
            <p className="comentario">{lastComentario}</p>
            <button></button>
        </div>
        
    );
}
export default Segunda;