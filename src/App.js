// src/App.js

import React from 'react';
import './App.css';
import 'animate.css';
import Dashboard from './components/dashboard';
import Contenido from './components/contenido';
import ContainerPrincipal2 from './components/containerprincipal2';
import Footer from './components/footer';
import Contenido2 from './components/contenido2';
import Conten3 from './components/conten3';
import Organico  from './components/organico';

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

        <Organico></Organico>


        <Contenido2></Contenido2>

        
        
        <Contenido></Contenido>
        <Footer></Footer>
     
      </main>
    </div>
  );
}

export default App;
