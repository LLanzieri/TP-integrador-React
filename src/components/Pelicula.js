import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Pelicula.css'

function Pelicula(props) {

    const prefijo = "https://image.tmdb.org/t/p/w500";
    let aux;
    let arrayFavoritos = [];

    const guardarFavorito = (idFavorito) => {
        aux = localStorage.getItem("favoritos");
        arrayFavoritos = JSON.parse(aux);
        arrayFavoritos.push(idFavorito);
        localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));
        alert('¡Pelicula favorita guardada exitosamente!');
    };

    return (<div className="pelicula">
        <div className="imagenPelicula">
            <img src={prefijo + props.mostrar.poster_path} alt="imagen de la película" />
        </div>
        <div className="containerReseña">
            <p className="tituloPelicula">{props.mostrar.title}</p>
            <p className="descripcion">{props.mostrar.overview}</p>
            <p className="releaseDate">Fecha de lanzamiento: {props.mostrar.release_date}</p>

            <button className="btnDetalle" onClick={() => guardarFavorito(props.mostrar.id)}> <a>Agregar Favorito <i class="fa fa-star yellow-color"></i></a></button>
            <button className="btnDetalle"><Link to="/detalle">Más información <i class="fa fa-info-circle" aria-hidden="true"></i></Link></button>
        </div>
    </div >);
}

export default Pelicula;