import React from 'react';
import './BackButton.css'
import { Link } from 'react-router-dom';

function BackButton(props) {
    return (
        <div className="BackButton">
            <Link to={props.pathBack} className="btn btn-secondary">Back</Link>
        </div>
    )
}

export default BackButton;