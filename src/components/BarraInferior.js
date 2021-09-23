import React from 'react';
import Lottie from 'react-lottie';
import animacion1 from '../animaciones/play.json';
import '../css/BarraInferior.css';

function BarraInferior() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="contenedorAnimaciones">
            <div className="animacionInferior"><Lottie options={defaultOptions} /></div>
            <div className="animacionInferior"><Lottie options={defaultOptions} /></div>
        </div>
    );
}

export default BarraInferior;