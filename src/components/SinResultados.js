import React from 'react'
import Lottie from 'react-lottie';
import animacion1 from '../animaciones/search-empty.json';
import '../css/SinResultados.css'

function SinResultados() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="containerContenido">
            <h1>¡No se han encontrado resultados para su actual búsqueda!</h1>
            <div>
                <Lottie options={defaultOptions} />
            </div>
        </div>);
}

export default SinResultados;