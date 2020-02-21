import React from 'react';
import './User.css';

const userOutput = (props) => {
    return (
        <div className="User">
            <p onClick={props.click}> I am {props.user} and I am old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default userOutput;