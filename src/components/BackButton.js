import React from 'react';
import './BackButton.css'
import { Link, useNavigate } from 'react-router-dom';

function BackButton(props) {

    const navigate = useNavigate();


    const moveButton = props.riddle3 ? ' BackButtonTop' : '';

    return (
        <div className={`BackButton${moveButton}`} onClick={() => navigate(props.pathBack)}>
            Back
        </div>
    )
}

export default BackButton;