// src/App.js

import React from 'react';
import './App.css';
import 'animate.css';
import Dashboard from './components/dashboard';
import Contenido from './components/contenido';
import ContainerPrincipal2 from './components/containerprincipal2';

function App() {
  return (
    <div className='back'>
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
        <Dashboard></Dashboard>

        <ContainerPrincipal2 />
        <Contenido></Contenido>
    

      </main>
    </div>
  );
}

export default App;
