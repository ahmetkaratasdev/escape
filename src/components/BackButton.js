import React from 'react';
import './BackButton.css'
import { Link, useNavigate } from 'react-router-dom';

function BackButton(props) {

    const navigate = useNavigate();

    const moveButton = props.riddle3 ? ' BackButtonTop' : '';

    return (
        <div className={`BackButton${moveButton}`} onClick={() => navigate(props.pathBack, {state: {direction: props.direction}})}>
            Back
        </div>
    )
}

export default BackButton;

// If I'm going from this page to another page, I want to change the styling of this component