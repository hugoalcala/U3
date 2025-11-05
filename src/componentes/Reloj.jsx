import { useState, useEffect } from "react";

const Reloj = () => {
    const [tiempo, setTiempo] = useState(0);
    useEffect(
        () => {
            const intervalo = setInterval(
                () => setTiempo(
                    t => t + 1), 1000
            );
            return () => clearInterval(intervalo);
        },[]
    );

    return  <p> Tiempor transcurrido :{tiempo} sg</p>
};
export default Reloj;