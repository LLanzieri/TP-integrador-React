import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import '../css/Pelicula.css'

function Detalle(props) {

    const [Pelicula, setPelicula] = useState();

    const peliId = props.match.params.peliculaID;
    const api_key = '893534e3373221881282bf1fad40646a';
    const endPoint_detalle = `https://api.themoviedb.org/3/movie/${peliId}?api_key=${api_key}&language=es`;

    const traerPeli = async () => {
        const data = await fetch(endPoint_detalle);
        const peli = await data.json();
        console.log(peli);
        setPelicula(peli);

    }

    useEffect(() => {
        traerPeli();
    }, [])


    const prefijo = "https://image.tmdb.org/t/p/w500";

    return (


        <>
            {Pelicula === undefined ? <Spinner /> :
                <div className="container my-4">
                    < div className="row" id="peliDetalle">
                        <div className=" col-12 col-md-4">
                            <img src={prefijo + Pelicula.poster_path} id="peliImg" className="rounded img-thumbnail" />
                        </div>
                        <div className="col-12 col-md-8" id="movieInfo">
                            {<h2> Titulo: {Pelicula.title} </h2>}
                            <h5>Generos: </h5>
                            {Pelicula.genres.map(genre => {
                                let genero = genre.name;
                                return (
                                    <ul key={genre.id} > {genero}</ul>
                                )
                            })}

                            <h5>Reseña: </h5>
                            <p>{Pelicula.overview}</p>
                            <h5 id="rating">Rating: {Pelicula.vote_average} </h5>
                            <Link to='/' className="btn btnDetalle my-3">Al inicio</Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}


export default Detalle;