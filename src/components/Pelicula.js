import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Pelicula.css'

function Pelicula(props) {

    const prefijo = "https://image.tmdb.org/t/p/w500";

    return (<div className="pelicula">
        <div className="imagenPelicula">
            <img src={prefijo + props.mostrar.poster_path} alt="imagen de la película"/>
        </div>
        <div className="containerReseña">
            <p className="tituloPelicula">{props.mostrar.title}</p>
            <p className="descripcion">{props.mostrar.overview}</p>
            <p className="releaseDate">Fecha de lanzamiento: {props.mostrar.release_date}</p>
            <button className="btnDetalle"><Link to="/detalle">Más información</Link></button>

        </div>
    </div>);
}

export default Pelicula;