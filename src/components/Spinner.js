import React from 'react'
import { SpinnerRoundOutlined } from 'spinners-react';
import '../css/Spinner.css'


function Spinner() {
    return (<div className="containerSpinner">
        <SpinnerRoundOutlined size={90} thickness={109} speed={126} color="rgba(57, 170, 172, 1)" />
        <h3>Cargando ...</h3>
    </div>);
}

export default Spinner;