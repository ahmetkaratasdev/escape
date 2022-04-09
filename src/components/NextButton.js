
import React from 'react';
import './NextButton.css'
import { Link } from 'react-router-dom';


function NextButton(props) {
    return (
        <div className="NextButton">
            <Link to={props.pathNext} className="btn btn-secondary" >{props.nextText}</Link>
        </div>
    )
}

export default NextButton;