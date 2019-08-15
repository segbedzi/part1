import React from 'react';

const Total = (props) => {
    return (
        <div>
            <p><strong>{props.parts.reduce((a,b)=> a + b.exercises,0)}</strong></p>
        </div>
    );
};

export default Total;