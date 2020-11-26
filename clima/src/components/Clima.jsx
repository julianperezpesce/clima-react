import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {


    const { name, main, weather } = resultado;


    if (!name) return null;
    
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    

    return ( 
        <div className="card-panel white col s12">
            <h2>La temperatura en {name} es:</h2>

            <p className="temperatura">{parseFloat( main.temp, 10 ).toFixed(1)}<span>&#x2103;</span></p>
            
            <div className="col s12 center-align">
                <img src={iconUrl}/>
            </div>

            <div className="col s12">
                    <p>{weather[0].description}</p>
            </div> 
            
            
            <div className="row">
                <div>
                    <p className="col s6">Max: {parseFloat( main.temp_min, 10 ).toFixed(1)}<span>&#x2103;</span></p>
                </div>
                <div>
                    <p className="col s6">Min: {parseFloat( main.temp_max, 10 ).toFixed(1)}<span>&#x2103;</span></p>
                </div>                           
            </div>
            
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
};
 
export default Clima; 