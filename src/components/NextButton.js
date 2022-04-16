
import React from 'react';
import './NextButton.css'
import { Link, useNavigate } from 'react-router-dom';
import { Animation } from './SlideAnimation.js'

function NextButton(props) {

    const navigate = useNavigate();
    return (
        <Animation className="NextButton" onClick={() => navigate(props.pathNext, {state: {direction: props.direction}})}>
            {props.nextText}
        </Animation>
    )
}

export default NextButton;