import React from 'react';
// import './User.css';

const validComp = (props) => {

    let message = 'text too short';
    if (props.textLength >=5 ) {
        message = 'text long enough';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
};

export default validComp;