import React,{useState} from 'react'
import '../Composto/composto.css'


function Composto(props) {
    const [lastComentario,setLastComentario]=useState("teste")



    return (
        <div className="Comp">
            
            <label className="nome"> {props.nome} </label>

            <input type="text" className="box_text" defaultValue={lastComentario}/>

         </div>
         )
}
export default Composto;