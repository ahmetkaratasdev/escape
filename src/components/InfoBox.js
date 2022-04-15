import './InfoBox.css';
import NextButton from './NextButton.js';
import BackButton from './BackButton.js';
import { TextBox } from './SlideAnimation.js'

function InfoBox(props) {

    return (
        <div>
            <TextBox direction={props.direction}>
                {props.text}
                {props.pathBack !== '' &&
                <BackButton direction='slideInLeft' pathBack={props.pathBack}/>}
                {props.pathNext !== '' &&
                <NextButton direction='slideInRight' pathNext={props.pathNext} nextText={props.nextText}/>}
            </TextBox>
        </div>
    )
}

export default InfoBox
