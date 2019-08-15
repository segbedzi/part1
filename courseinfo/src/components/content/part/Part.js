import React from 'react';

const Part = (props) => {
    return (
        <div>
            <p>Course: {props.part.name}  <strong>  Exercises : {props.part.exercises}</strong></p>
        </div>
    );
};

export default Part;