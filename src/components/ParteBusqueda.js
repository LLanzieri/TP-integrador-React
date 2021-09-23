import { React } from "react";
import { Link } from 'react-router-dom';
import '../css/ParteBusqueda.css';

function ParteBusqueda(props) {

    return (
        <div className="segundoContainer" >
            <div className="linkMobile">
                <Link to='/'>Home</Link>
            </div>
            <div className="busqueda">
                <input type="text" name="inputBusqueda" className="inputBusqueda" />
                <button className="btnBusqueda">BUSCAR</button>
            </div>
        </div>
    );
}

export default ParteBusqueda;