import React, { useState, useMemo } from 'react';

const calcularFactorial = (numero) => 
  (numero < 0 
    ? 'Error' 
    : numero === 0 
      ? 1 
      : numero * calcularFactorial(numero - 1));

const CalculadoraFactorial = () => {
  const [numero, setNumero] = useState(5);
  const [texto, setTexto] = useState('');

  const resultadoFactorial = useMemo(() => {
    console.log(`Factorial recalculado para ${numero}`);
    return calcularFactorial(numero);
  }, [numero]);

  return (
    <div>
      <h2>Cálculo de Factorial</h2>
      
      <label>Número:</label>
      <input 
        type="number" 
        value={numero} 
        onChange={(e) => setNumero(parseInt(e.target.value) || 0)} 
        min="0"
      />
      <h3>Resultado: {resultadoFactorial}</h3>
      
      {}
      <label>Escribir texto:</label>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
      />
      <p>Texto actual: {texto}</p>
    </div>
  );
};

export default CalculadoraFactorial;