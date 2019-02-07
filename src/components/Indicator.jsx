import React from 'react';
import './Indicator.css';

const Indicator = (props) => {
    let content = (props.counter > 0) ? `Hay ${props.counter} palabras detro del texto` : 'Ingrese el texto';

    return(
        <p className="Indicator">{content}</p>
    );
};

export default Indicator;