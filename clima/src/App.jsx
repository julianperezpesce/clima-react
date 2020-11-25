import React, { Fragment, useState } from 'react'
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {

  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                
              />
            </div>

            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App