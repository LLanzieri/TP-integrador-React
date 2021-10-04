import { React, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Link } from 'react-router-dom'
import '../css/Pelicula.css'

function PeliculaFavorita(props) {

    const prefijoFetch = 'https://api.themoviedb.org/3/movie/';
    const prefijoImagen = "https://image.tmdb.org/t/p/w500";
    const api_key = '893534e3373221881282bf1fad40646a';
    let endPoint_favorito = '';
    let aux;
    let arrayFavoritos = [];
    let index;
    let id = props.id;
    const [datosPelicula, setDatosPelicula] = useState({});

    const buscarFavorito = () => {
        let aux = { props };
        let idPelicula = aux.props.id;
        endPoint_favorito = prefijoFetch + idPelicula + '?api_key=' + api_key + '&language=es';

        fetch(endPoint_favorito)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setDatosPelicula(respuesta);
                })
    }

    const eliminarFavorito = (idPelicula) => {
        aux = localStorage.getItem("favoritos");
        arrayFavoritos = JSON.parse(aux);
        index = arrayFavoritos.indexOf(idPelicula);
        arrayFavoritos.splice(index, 1);
        localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));
    }

    useEffect(() => {
        buscarFavorito();
    }, [])
    console.log(datosPelicula);
    return (
        
        <div className="pelicula">
            <div className="imagenPelicula">
                <img src={prefijoImagen + datosPelicula.poster_path} alt="imagen de la película" />
            </div>
            <div className="containerReseña">
                <p className="tituloPelicula">{datosPelicula.title}</p>
                <p className="descripcion">{datosPelicula.overview}</p>
                <p className="releaseDate">Fecha de lanzamiento: {datosPelicula.release_date}</p>

                <button className="btnDetalle" onClick={() => {eliminarFavorito(datosPelicula.id);props.onShow()}}><a>Eliminar favorito <i class="fa fa-times-circle"></i></a></button>
            <button className="btnDetalle"><Link to={'/detalle/' + id}>Más información <i class="fa fa-info-circle" aria-hidden="true"></i></Link></button>
        </div>
        </div >
    );
}


export default PeliculaFavorita;