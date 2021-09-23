import { React, useState } from "react";
import ParteBusqueda from "./ParteBusqueda";
import Hamburger from 'hamburger-react';
import animacion2 from '../animaciones/movie-theatre.json';
import Lottie from 'react-lottie';
import '../css/CabeceraMobile.css';

function CabeceraMobile() {

    let [visibilidad, setVisibilidad] = useState(false);

    const cambiarVisibilidad = () => {
        setVisibilidad(!visibilidad);
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <div className="primerContainer">
                <div className="animacion"><Lottie options={defaultOptions} /></div>
                <div className="tituloPagina">
                    <p>MovFlix</p>
                </div>
                <div className="btnHamburger">
                    <Hamburger onToggle={cambiarVisibilidad} />
                </div>
            </div>

            {/* SI visibilidad ES TRUE, MUESTRO <ParteBusqueda/> , SINO NO MUESTRO NADA */}
            {
                visibilidad && <ParteBusqueda />
            }
        </>
    );
}

export default CabeceraMobile;