
import React from 'react';
import './NextButton.css'
import { Link, useNavigate } from 'react-router-dom';


function NextButton(props) {

    const navigate = useNavigate();
    return (
        <div className="NextButton" onClick={() => navigate(props.pathNext)}>
            {props.nextText}
        </div>
    )
}

export default NextButton;