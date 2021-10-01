import React from 'react'
import { useState } from 'react/cjs/react.development';
import '../css/Modal.css'

const Modal = props => {

    const [show, setShow] = useState(true);
    
    return (<div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        <div className="contenido-modal" onClick={e => e.stopPropagation()}>
            <div className="contenido-header">
                <h4 className="titulo-modal"> Favoritos</h4>
            </div>
            <div className="body-modal">
                {props.children}
            </div>

            <div className="footer-modal">
                <button className="btnCerrar" onClick={props.onClose}>CERRAR</button>
            </div>
        </div>
    </div>);
}

export default Modal;