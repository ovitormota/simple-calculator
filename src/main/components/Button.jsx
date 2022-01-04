import React from 'react';
import './Button.css';

export const Button = ({ label, double, triple, operation, onClick }) => {
    const classes = `  button 
        ${double && 'double'}
        ${triple && 'triple'}
        ${operation && 'operation'}`;

    return (
        <button className={classes} onClick={(e) => onClick(e.target.innerHTML)}>
            {label}
        </button>
    );
};
