 import React from 'react';
 import './CharComp.css';

const charComp = (props) => {
    return (
        <div className="CharComp">
            <p onClick={props.delete}>Chars: {props.character}</p>
        </div>
    )
};

export default charComp;
