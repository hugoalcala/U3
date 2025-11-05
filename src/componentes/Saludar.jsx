import React, { useContext } from 'react';
import LenguajeContext from './LenguajeContexto';
const Saludo = () => {
  const { language, setLanguage } = useContext(LenguajeContext);
  const greeting = language === 'es' ? 'Hola' : 'Hello';

 
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <h2>{greeting}</h2>
      <p>Idioma actual: *{language.toUpperCase()}*</p>
      
      <button onClick={toggleLanguage}>
        Cambiar a {language === 'es' ? 'Inglés' : 'Español'}
      </button>
    </div>
  );
};

export default Saludo;