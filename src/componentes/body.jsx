import React from 'react';

const Boton = () => {
  const handleButtonClick = () => {
    console.log("¡Botón simple clickeado!");
    setTimeout(() => {
      message.remove();
    }, 1500);
  };

  return (
    <div className="flex justify-center p-4"> 
      <button 
        className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 px-8 
                   rounded-full shadow-lg transition duration-200"
        onClick={handleButtonClick}
      >
        BOTÓN REDONDO
      </button>
    </div>
  );
};

export default Boton;