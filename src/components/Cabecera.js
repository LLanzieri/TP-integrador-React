import { React, useState } from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CabeceraMobile from "./CabeceraMobile";
import CabeceraDesktop from "./CabeceraDesktop";
import './Cabecera.css';

function Cabecera() {

    // media-queries para ver que componente muestro segun la resolución
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 745px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 745px)' });

    return (
        <div className="header">
            <div className="titulo">

                {/* PREGUNTO SI ES RESOLUCIÓN MOBILE - MUESTRO ESA CABECERA */}
                {isTabletOrMobile && <CabeceraMobile />

                }

                {/* PREGUNTO SI ES RESOLUCIÓN DESKTOP - MUESTRO ESA CABECERA */}
                {
                    isDesktopOrLaptop && <CabeceraDesktop />
                }
            </div>
        </div >
    );

}

export default Cabecera;