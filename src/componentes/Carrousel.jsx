import { useState } from "react";
import batman from "../assets/batman.jpeg"
import flash from "../assets/flash.jpeg"
import superman from "../assets/superman.jpeg"

function Carrousel(){
    const imagenes = [batman, flash, superman];
    const[indice, setIndice] = useState(0);

    const sig = () =>{
        if (indice === imagenes.length -1) {
            setIndice(0);
        }else{
            setIndice(indice + 1);
        }
    };
    return(
        <div>
            <img  src={imagenes[indice]} alt="imagen carrusel">
            </img>
            <div>
                <button onClick={sig}>pasar</button>
            </div>
            
        </div>
    );
}
export default Carrousel