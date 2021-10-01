import React from 'react'
import Lottie from 'react-lottie';
import animacion1 from '../animaciones/search-empty.json';
import '../css/SinFavoritos.css'

function SinFavoritos() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (<div className="containerContenido">
        <div>
            <h2>¡No se han encontrado peliculas favoritas en su actual sesión!</h2>
        </div>
        <div>
            <Lottie options={defaultOptions} />
        </div>
    </div>);
}

export default SinFavoritos;