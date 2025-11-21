import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './componentes/inicio.jsx'
import Contacto from './componentes/contacto.jsx'
import Perfil from './componentes/perfil.jsx'
import RegistroFormulario from './componentes/FormularioControlado.jsx'

function App() {
  return (
    < RegistroFormulario />
  );
}

export default App;
