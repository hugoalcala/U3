import { useState } from "react";

function Inputs() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    return (
        <>
           <Input nombre = {nombre} setNombre={setNombre}/>
           <Input apellido = {apellido} setApellido = {setApellido}/>
        </>
    );
}

export default Inputs;