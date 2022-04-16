import React from 'react';
import './BackButton.css'
import { Link, useNavigate } from 'react-router-dom';
import { Animation } from './SlideAnimation.js'

function BackButton(props) {

    const navigate = useNavigate();

    const moveButton = props.riddle3 ? ' BackButtonTop' : '';
    console.log('direction is ' + props.direction)
    return (
        <div className={`BackButton${moveButton}`} onClick={() => navigate(props.pathBack, {state: {direction: props.direction}})}>
            Back
        </div>
        
    )
}

export default BackButton;
