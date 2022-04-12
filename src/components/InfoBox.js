import './InfoBox.css';
import NextButton from './NextButton.js';
import BackButton from './BackButton.js';
import TextAnimation from './TextAnimation';
import React, { useEffect, useState } from "react";
import { Button, Collapse, Card, Fade } from 'react-bootstrap';

function InfoBox(props) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(!open);
    }, [])

    return (
        <div className="text-box">
            <div>
                <Fade in={open} dimension="width" timeout={1000}>
                    <div id="example-collapse-text">
                        <Card body >
                            {props.text}
                        </Card>
                    </div>
                </Fade>
            </div>
            {props.pathBack !== '' &&
            <BackButton pathBack={props.pathBack}/>}
            {props.pathNext !== '' &&
            <NextButton pathNext={props.pathNext} nextText={props.nextText}/>}
        </div>
    )
}

export default InfoBox
