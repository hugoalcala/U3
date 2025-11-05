import { useState } from 'react';

function Ejercicio2inputs() {
	const [contador, setContador] = useState(0);

	const incrementar = () => setContador(valor => valor + 1);
    const decrementar = () => setContador(valor => valor-1)

	return (
		<div>
			<HermanoA contador={contador} incrementar={incrementar} decrementar={decrementar}/>
			<HermanoB contador={contador} incrementar={incrementar} decrementar={decrementar} />
           
		</div>
	);
}

function HermanoA({ contador, incrementar, decrementar }) {
	return (
		<div>
			<div>Hermano A: {contador}</div>
			<button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
		</div>
	);
}

function HermanoB({ contador, incrementar, decrementar }) {
	return (
		<div>
			<div>Hermano B: {contador}</div>
			<button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
		</div>
	);
}

export default Ejercicio2inputs;