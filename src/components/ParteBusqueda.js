import { React } from "react";
import './ParteBusqueda.css';

function ParteBusqueda(props) {

    return (
        <div className="segundoContainer" >
            <a href="#">Home</a>
            <div className="busqueda">
                <input type="text" name="inputBusqueda" className="inputBusqueda" />
                <button className="btnBusqueda">BUSCAR</button>
            </div>
        </div>
    );
}

export default ParteBusqueda;