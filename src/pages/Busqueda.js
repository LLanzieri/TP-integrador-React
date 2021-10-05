import { React, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Pelicula from "../components/Pelicula";
import Paginacion from "../components/Paginacion";
import '../css/Home.css'
import Modal from '../components/Modal'

function Busqueda(props) {


    const [pagina, setPagina] = useState(1);
    const [peliculas, setPeliculas] = useState([]);
    const [totalPaginas, setTotalPaginas] = useState(1);

// Establezco un estado para pasarle al cartel Modal
    const [visibilidadModal, setVisibilidadModal] = useState(false);
    
    const id = props.match.params.id;
    const api_key = '893534e3373221881282bf1fad40646a';
    const endPoint_busqueda = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=es&query=${id}&page=${pagina};`
    
    
    const buscarPeliculasPopulares = () => {
    fetch(endPoint_busqueda)
        .then(respuesta => respuesta.json())
        .then(
            (respuesta) => {
                //guardo las peliculas que traigo
                setPeliculas(respuesta.results);
                //guardo la cantidad total de páginas que traigo
                setTotalPaginas(respuesta.total_pages);
            },
        )
    }
    const paginaAnterior = () => {
    if (pagina > 1)
        setPagina(pagina - 1);
    }
    const proximaPagina = () => {
    if (pagina < totalPaginas)
        setPagina(pagina + 1);
    }
//si cambia la página, voy a buscar la que corresponda
    useEffect(
    () => {
        //pongo un array vacío para que se pregunte por el peliculas.length === 0 y se muestre el spinner, de todas formas el fetch va a buscar una página específi
        setPeliculas([]);
        // voy a buscar la página despues de 3 segundos
        setTimeout(buscarPeliculasPopulares, 3000);
    }, [pagina]
    );
    
    return (
    <div>
        {/* Este componente va a tener un cartel Modal para mostrar */}
        <Modal show={visibilidadModal} onClose={() => setVisibilidadModal(false)} >
            ¡Película favorita guardada exitosamente!
        </Modal>
        {peliculas.length === 0 ? <Spinner /> :
            <>
                <Paginacion pagina={pagina} decrementarPagina={paginaAnterior} incrementarPagina={proximaPagina} ultimaPagina={totalPaginas} />
                <div className="containerPeliculas">
                    {
                        peliculas.map(elemento => {
                            return <Pelicula key={elemento.title} mostrar={elemento}
                                onShow={() => setVisibilidadModal(true)} />
                        })
                    }
                </div>
                <Paginacion pagina={pagina} decrementarPagina={paginaAnterior} incrementarPagina={proximaPagina} ultimaPagina={totalPaginas} />
            </>}
    </div >
);
    
    
    
    
}

export default Busqueda;