import React, { Fragment, useState, useEffect } from 'react'
import Clima from './components/Clima';
import Error from './components/Error';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {

  //API
  

  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      
      if (consultar) {

        const appId = '2ffd011d95815fd7683dded5ec65982d';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&lang=sp&units=metric`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);

        //Si no hago esto, luego de realizar una consulta erronea
        //no puedo volver a consultar. De esta manera si puedo
        //hace multiples consultas
        
        guardarConsulta(false);

        //Detectar errores
        if (resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    }

    consultarAPI();
    
  }, [consultar]);

  let componente;

  if(error) {
    componente = <Error mensaje="Busqueda incorrecta"/>
  } else {
    componente =  <Clima 
                    resultado={resultado}
                  />
  }


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
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              />
            </div>

            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}


export default App
