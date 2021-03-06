import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Pelicula.css'
import Fade from 'react-reveal/Fade';

function Pelicula(props) {

    const prefijo = "https://image.tmdb.org/t/p/w500";
    let aux;
    let arrayFavoritos = [];

    const guardarFavorito = (idFavorito) => {
        aux = localStorage.getItem("favoritos");
        arrayFavoritos = JSON.parse(aux);
        if (!arrayFavoritos.includes(idFavorito))
            arrayFavoritos.push(idFavorito);
        localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));
    };

    return (
        <>
            <Fade right>
                <div className="pelicula">
                    <div className="imagenPelicula">
                        {
                            props.mostrar.poster_path !== null ? <img src={prefijo + props.mostrar.poster_path} alt="imagen de la película" /> : <img src='/imgs/ningunPoster.jpg' alt="Imágen del poster" />
                        }
                    </div>
                    <div className="containerReseña">
                        <p className="tituloPelicula">{props.mostrar.title}</p>
                        <p className="descripcion">{props.mostrar.overview.substr(0, 200).trim()} ...</p>
                        <p className="releaseDate">Fecha de lanzamiento: {props.mostrar.release_date}</p>

                        <button className="btnDetalle" onClick={() => { guardarFavorito(props.mostrar.id); props.onShow() }}> <a>Agregar Favorito <i className="fa fa-star yellow-color"></i></a></button>
                        <button className="btnDetalle"><Link to={'/detalle/' + props.mostrar.id}>Más información <i className="fa fa-info-circle" aria-hidden="true"></i></Link></button>
                    </div>
                </div >
            </Fade>

        </>);
}

export default Pelicula;