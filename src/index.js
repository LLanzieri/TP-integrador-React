import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import BarraInferior from './components/BarraInferior';
import Footer from './components/Footer';
import Cabecera from './components/Cabecera';
import './index.css';

ReactDOM.render(

  <BrowserRouter>
    <React.StrictMode>

      <div className="contenedordetodo">
        <Cabecera />

        <App />
        <App />
        <App />

        <BarraInferior />
        <Footer />
      </div>

    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);