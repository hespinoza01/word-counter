import React from 'react';

const Indicator = (props) => {
    let content = (props.counter > 0) ? `Hay ${props.counter} palabras detro del texto` : 'Ingrese el texto';

    return(
        <p>{content}</p>
    );
};

export default Indicator;