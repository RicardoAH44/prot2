import React from 'react';
import './App.css';
import 'animate.css';
import Dashboard from './components/dashboard';
import Contenido from './components/contenido';

function App() {
  return (
    <div>
      <main>
        <div className='containerpincipal'>
          <div id="container_limon" className="container">
            <div className="overlay"></div>
            <div id="text" className="animate__animated animate__slideInLeft">
              <h1>LIMON</h1>
            </div>
            <div id="text2" className="animate__animated animate__slideInLeft">
              <h1>SUPREMO</h1>
            </div>
          </div>
        </div>

        <div className='containerprincipal2'>
          <div className="contenido-container">
            <div className="contenido-content">
              <div className="contenido-text">
                <h1>Texto a la Izquierda</h1>
                <p>Más texto descriptivo si es necesario.</p>
              </div>
              <div className="contenido-imagen">
                <img src={process.env.PUBLIC_URL + '/public/images/Supremo.png'} alt="Ejemplo" />
              </div>
            </div>
          </div>
        </div>
        <div className='containerprincipal2'>
          <div className="contenido-container">
            <div className="contenido-content">
              <div className="contenido-text">
                <h1>Texto a la Izquierda</h1>
                <p>Más texto descriptivo si es necesario.</p>
              </div>
              <div className="contenido-imagen">
                <img src={process.env.PUBLIC_URL + '/public/images/Supremo.png'} alt="Ejemplo" />
              </div>
            </div>
          </div>
        </div>
        <div className='containerprincipal2'>
          <div className="contenido-container">
            <div className="contenido-content">
              <div className="contenido-text">
                <h1>Texto a la Izquierda</h1>
                <p>Más texto descriptivo si es necesario.</p>
              </div>
              <div className="contenido-imagen">
                <img src={process.env.PUBLIC_URL + '/public/images/Supremo.png'} alt="Ejemplo" />
              </div>
            </div>
          </div>
        </div>
        <div className='containerprincipal2'>
          <div className="contenido-container">
            <div className="contenido-content">
              <div className="contenido-text">
                <h1>Texto a la Izquierda</h1>
                <p>Más texto descriptivo si es necesario.</p>
              </div>
              <div className="contenido-imagen">
                <img src={process.env.PUBLIC_URL + '/public/images/Supremo.png'} alt="Ejemplo" />
              </div>
            </div>
          </div>
        </div>
        <div className='containerprincipal2'>
          <div className="contenido-container">
            <div className="contenido-content">
              <div className="contenido-text">
                <h1>Texto a la Izquierda</h1>
                <p>Más texto descriptivo si es necesario.</p>
              </div>
              <div className="contenido-imagen">
                <img src={process.env.PUBLIC_URL + '/public/images/Supremo.png'} alt="Ejemplo" />
              </div>
            </div>
          </div>
        </div>

        <Dashboard></Dashboard>

      </main>
    </div>
  );
}

export default App;
