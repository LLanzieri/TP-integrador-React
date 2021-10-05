import { React , useState } from "react";
import { Link } from 'react-router-dom';
import '../css/ParteBusqueda.css';

function ParteBusqueda(props) {
    const [valorInput, setValorInput] = useState("");
    
    return (
        <div className="segundoContainer" >
            <div className="linkMobile">
                <Link to='/'>Home</Link>
                <Link to='/favoritos'>Favoritos</Link>
            </div>
            <div className="busqueda">
                <input type="text" name="inputBusqueda" className="inputBusquedaDesk" onChange={(e) => setValorInput(e.target.value)} />
                <button className="btnBusquedaDesk" ><Link to={`/busqueda/${valorInput}`}>BUSCAR</Link></button>
            </div>
        </div>
    );
}

export default ParteBusqueda;