import {BrowseRouter, Routes, Route} from 'react-dom'
function Contacto() {
  return (
    <form>
      <input type="text" placeholder="Tu nombre" />
      <input type="email" placeholder="Tu correo electrónico" />
      <button type="submit">
        Enviar
      </button>    
    </form>
  );
}
export default Contacto;