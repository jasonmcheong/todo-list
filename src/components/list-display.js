import React from 'react';

const ListDisplay = props => {
    return (
        <ul>
            {props.tasks.map((task, idx) => {
                return <li key={idx}>{task}</li>;
            })}
        </ul>
    );
};

export default ListDisplay;
