import './App.css';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Busqueda from './pages/Busqueda';
import Error404 from './pages/Error404';
import BarraInferior from './components/BarraInferior';
import Footer from './components/Footer';
import Cabecera from './components/Cabecera';
import Favoritos from './pages/Favoritos';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="contenedordetodo">
        <Cabecera />

        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/detalle' component={Detalle} />
          <Route path='/busqueda' component={Busqueda} />
          <Route path='/favoritos' component={Favoritos} />

          {/* SI NO ENTRA A NINGUNA RUTA, MUESTRO EL ERROR */}
          <Route component={Error404} />

        </Switch>

        <BarraInferior />

        <Footer />
      </div>

    </>
  );
}

export default App;
