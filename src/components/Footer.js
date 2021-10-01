import React from "react";
import { useEffect } from "react";
import '../css/Footer.css'

function Footer() {

    const existeFavoritos = localStorage.getItem('favoritos');

    // como el footer es el unico componente que no se refresca, indico que cuando se monte se setee la variable en LocalStorage con un array vacio []
    useEffect(() => {

        // si NO existe la clave favoritos en LocalStorage, la creo
        if (!existeFavoritos)
            localStorage.setItem('favoritos', JSON.stringify([]));

        // sino, quiere decir que la página ya se ejecuto por lo menos una vez y puede tener alguna película favorita como no.

    }, []);

    return (
        <div className="footer">
            <h3>MovFlix - All rights reserved - 2021</h3>
        </div>
    );
}

export default Footer;