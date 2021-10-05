import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Paginacion.css'

function Paginacion(props) {

    return (
        <div className="containerPaginacion">
            <div className="paginas">
                <h3 className="tituloPaginas">Página {props.pagina} de {props.ultimaPagina}</h3>
                <button className="btnPaginacion" onClick={props.decrementarPagina}>🡸 Anterior</button>
                <button className="btnPaginacion" onClick={props.incrementarPagina}>Siguiente 🡺</button>
            </div>
            <div className="paginas">
                <button className="btnDetalle"><Link to="/favoritos">Mis Favoritos <i class="fa fa-star yellow-color"></i></Link></button>
            </div>
        </div>);
}

export default Paginacion;