import React from 'react';
import './User.css';

const userInput = (props) => {
    const style = {
        backgroundColor: 'pink',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
    return (
        <div className="User" style={style}>
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default userInput;