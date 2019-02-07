import React from 'react';

const TextBox = (props)=> {
    return(
        <textarea onChange={props.onChange} value={props.value}/>
    );
};

export default TextBox;