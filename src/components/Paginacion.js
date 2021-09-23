import React from 'react'
import '../css/Paginacion.css'

function Paginacion(props) {
    return (<div className="paginas">
        <h3>Página {props.pagina} </h3>
        <button className="btnPaginacion" onClick={props.decrementarPagina}>🡸 Anterior</button>
        <button className="btnPaginacion" onClick={props.incrementarPagina}>Siguiente 🡺</button>
    </div>);
}

export default Paginacion;