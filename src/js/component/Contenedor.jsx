import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Contenedor = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => (prevTime + 1) % 1000000);
        }, 1000);

        const timeout = setTimeout(() => {
            alert("su tiempo se ha agotado");
        }, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);
    
    const formattedTime = String(time).padStart(6, '0').split('').reverse().join('');

    return (
        <div className="reloj">
            <p><FontAwesomeIcon icon={faClock} /></p>
            <div className="digit">
                {formattedTime.split('').map((digit, index) => (
                    <div key={index}>{digit}</div>
                ))}
            </div>
        </div>
    );
}

export default Contenedor;



