import React from "react";
import Lottie from 'react-lottie';
import animacion2 from '../animaciones/movie-theatre.json';
import { Link } from "react-router-dom";
import '../css/CabeceraDesktop.css';
import { useState } from "react/cjs/react.development";

function CabeceraDesktop() {

    const [valorInput, setValorInput] = useState("");

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const refresh = () => {
        // re-renders the component
        window.location.reload(false);
    }

    return (
        <div className="desktop">
            <div className="containerIzq">
                <div className="animacionDesk"><Lottie options={defaultOptions} /></div>
                <div className="tituloPaginaDesk">
                    <p>MovFlix</p>
                </div>
                <div className="link">
                    <Link to='/'>Home</Link>
                    <Link to='/favoritos'>Favoritos</Link>
                </div>
            </div>
            <div className="containerDer">
                <input type="text" name="inputBusqueda" className="inputBusquedaDesk" onChange={(e) => setValorInput(e.target.value)} />
                <button className="btnBusquedaDesk" onClick={refresh}><Link to={`/busqueda/${valorInput}`}>BUSCAR</Link></button>
            </div>

        </div >
    );
}

export default CabeceraDesktop;


















































