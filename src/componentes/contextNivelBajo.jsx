import { useContext } from "react";
import UsuarioContext from "./Context";

const Nivel1  = () =>{Nivel2};

const Nivel2 = () => {Nivel3};

const Nivel3 = () =>{
    const user = useContext(UsuarioContext);
    return <h1>{user.nombre} - {user.rol}</h1>
}
export default Nivel1;