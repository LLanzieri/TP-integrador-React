import React from "react";
import Lottie from 'react-lottie';
import animacion2 from '../animaciones/movie-theatre.json';
import { Link } from "react-router-dom";
import '../css/CabeceraDesktop.css';
import { useState } from "react/cjs/react.development";

function CabeceraDesktop() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="desktop">
            <div className="containerIzq">
                <div className="animacionDesk"><Lottie options={defaultOptions} /></div>
                <div className="tituloPaginaDesk">
                    <p>MovFlix</p>
                </div>
                <div className="link">
                    <Link to='/'>Home</Link>
                </div>
            </div>
            <div className="containerDer">
                <input type="text" name="inputBusqueda" className="inputBusquedaDesk" />

                <button className="btnBusquedaDesk">BUSCAR</button>
            </div>

        </div>
    );
}

export default CabeceraDesktop;