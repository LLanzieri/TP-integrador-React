import React from 'react'
import '../css/Trailer.css'

function Trailer(props) {

    return (
        <div className="contenedor-trailer">
            <h1>{props.titulo}</h1>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.idPelicula}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    );
}

export default Trailer;