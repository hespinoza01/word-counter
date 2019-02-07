import React from 'react';
import './TextBox.css';

const TextBox = (props)=> {
    return(
        <textarea className="TextBox" onChange={props.onChange} value={props.value}/>
    );
};

export default TextBox;