import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carrousel from './componentes/Carrousel'
import ChisteRandom from './componentes/ChisteRandom'
import Reloj from './componentes/Reloj'
import CalculadoraFactorial from './componentes/useMemo'
import Toggle from './componentes/useToggle'
import LenguajeContext from './componentes/LenguajeContexto.jsx'
import Saludo from './componentes/Saludar.jsx'
import AuthContext from './componentes/AuthContext.jsx'; 
import AuthStatus from './componentes/AuthStatus.jsx'; 
import Inputs from './componentes/Inputs.jsx';
import Ejercicio2inputs from './componentes/Ejercicio2inputs.jsx';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
      <Card
        title="Mi Título de Tarjeta"
        paragraph="Este es el contenido del párrafo de la tarjeta. Incluye información importante y relevante."
      />
    </div>
  );
}

export default App;
