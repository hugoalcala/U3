import { useEffect, useState } from "react";

const ChisteRandom = () =>{
    const [joke, setJoke] = useState ("click para un chiste")
    const getJoke = async() => {
        setJoke("Mira este chiste que te voy a contar");
        try{
            const respuesta = await fetch ("https://api.chucknorris.io/jokes/random");
            const chiste = await respuesta.json();
            setJoke(chiste.value)
        }catch(error){
            setJoke("No tengo chiste prueba de nuevo")
        }
    };
    useEffect(() =>{
        getJoke();
    }, []);

    return(
        <div>
            <h2>El chiste</h2>
            <p>{joke}</p>
            <button onClick={getJoke}>DAME UN CHISTE</button>
        </div>
    )
}


export default ChisteRandom;