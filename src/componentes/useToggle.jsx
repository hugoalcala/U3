import React, { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(currentValue => !currentValue);
  }, []);

  return [value, toggle];
};

function Toggle() {
  const [isActive, toggle] = useToggle(false); 

  return (
    <div>
      <p>Estado: {isActive.toString()}</p>
      <button onClick={toggle}>
        Cambiar
      </button>
    </div>
  );
}

export default Toggle;