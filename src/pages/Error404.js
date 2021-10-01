import React from "react";
import Lottie from 'react-lottie';
import animacion1 from '../animaciones/error-404-animation.json';
import animacion2 from '../animaciones/error-404-facebook-style.json';
import '../css/Error404.css'

function Error404() {

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animacion1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animacion2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <div className="animacionErrorCara"><Lottie options={defaultOptions2} /></div>
            <div className="animacionErrorPage"><Lottie options={defaultOptions1} /></div>
        </>
    );
}

export default Error404;