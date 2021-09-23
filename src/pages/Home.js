import { React, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Pelicula from "../components/Pelicula";
import Paginacion from "../components/Paginacion";
import '../css/Home.css'

function Home() {

    const [pagina, setPagina] = useState(1);
    const [peliculas, setPeliculas] = useState([]);

    const api_key = '893534e3373221881282bf1fad40646a';
    const endPoint_populares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es&page=${pagina}`;

    const buscarPeliculasPopulares = () => {
        fetch(endPoint_populares)
            .then(respuesta => respuesta.json())
            .then(
                (respuesta) => {
                    setPeliculas(respuesta.results);
                },
            )
    }

    const paginaAnterior = () => {
        if (pagina > 1)
            setPagina(pagina - 1);
    }

    const proximaPagina = () => {
        if (pagina < 500)
            setPagina(pagina + 1);
    }

    //si cambia la página, voy a buscar la que corresponda
    useEffect(
        () => {
            // voy a buscar la página despues de 3 segundos
            setTimeout(buscarPeliculasPopulares, 3000);
        }, [pagina]
    );

    return (
        <div>
            {peliculas.length === 0 ? <Spinner /> :
                <>
                    <Paginacion pagina={pagina} decrementarPagina={paginaAnterior} incrementarPagina={proximaPagina} />
                    <div className="containerPeliculas">
                        {
                            peliculas.map(elemento => {
                                return <Pelicula mostrar={elemento} />
                            })
                        }
                    </div>
                    <Paginacion pagina={pagina} decrementarPagina={paginaAnterior} incrementarPagina={proximaPagina} />
                </>}
        </div >
    );
}

export default Home;