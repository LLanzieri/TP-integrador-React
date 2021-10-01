import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import PeliculaFavorita from '../components/PeliculaFavorita';
import Lottie from 'react-lottie';
import animacion1 from '../animaciones/favourite_star.json';
import '../css/Favoritos.css'
import SinFavoritos from '../components/SinFavoritos';


function Favoritos() {

    const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);
    let aux;
    let arrayFavoritos = [];

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    // Cuando el componente se monta, saco los id de las peliculas favoritas almacenadas en LocalStorage

    const cargarFavoritos = () => {
        aux = localStorage.getItem("favoritos");
        arrayFavoritos = JSON.parse(aux);
        setPeliculasFavoritas(arrayFavoritos);
    }

    const eliminarTodosLosFavoritos = () => {
        // limpio el LocalStorage
        localStorage.setItem('favoritos', JSON.stringify([]));
        alert("¡Todas las películas fueron eliminadas de sus favoritos!")
    }

    useEffect(() => {
        cargarFavoritos();
    }, [peliculasFavoritas]);

    return (
        <>
            <div className="headerFavoritos">
                <div className="animacionFavoritos">
                    <Lottie options={defaultOptions} />
                </div>

                <div className="tituloFavoritos">
                    <h1 style={{ textDecoration: "underline" }}>Mis Favoritos</h1>
                    <div>
                        <button className="btnEliminarTodos" onClick={eliminarTodosLosFavoritos}><a>Eliminar todos <i class="fa fa-minus-circle"></i></a></button>
                    </div>
                </div>

                <div className="animacionFavoritos">
                    <Lottie options={defaultOptions} />
                </div>
            </div>

            <div className="containerPeliculas">
                {peliculasFavoritas.length === 0 ? <SinFavoritos /> :

                    // recorro el array de ids y se los paso al componente PeliculaFavorita para que se encargue de mostrar
                    peliculasFavoritas.map(elemento => { return <PeliculaFavorita key={elemento} id={elemento} /> })
                }
            </div>

        </>
    );
}

export default Favoritos;