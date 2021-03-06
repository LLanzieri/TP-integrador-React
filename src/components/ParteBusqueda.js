import { React, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/ParteBusqueda.css';

function ParteBusqueda(props) {
    const [valorInput, setValorInput] = useState("");

    const refresh = () => {
        // re-renders the component
        window.location.reload(false);
    }

    return (
        <div className="segundoContainer" >
            <div className="linkMobile">
                <Link to='/'>Home</Link>
                <Link to='/favoritos'>Favoritos</Link>
            </div>

            <div className="busqueda">
                <input type="text" name="inputBusqueda" className="inputBusqueda" onChange={(e) => setValorInput(e.target.value)} />
                <button className="btnBusquedaDesk" onClick={refresh}><Link to={`/busqueda/${valorInput}`}>BUSCAR</Link></button>
            </div>
        </div>
    );
}

export default ParteBusqueda;