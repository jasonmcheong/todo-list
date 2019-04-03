import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ListDisplay = props => {
    return (
        <ul>
            {props.tasks.map((task, idx) => {
                return (
                    <li key={idx} onClick={() => props.delete(idx)}>
                        {task} <FontAwesomeIcon icon={faTrashAlt} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ListDisplay;
