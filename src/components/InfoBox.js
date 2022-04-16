import './InfoBox.css';
import NextButton from './NextButton.js';
import BackButton from './BackButton.js';
import { Animation, TextBox } from './SlideAnimation.js'

function InfoBox(props) {

    return (
        <div>
            <TextBox direction={props.direction}>
                {/* <Animation > */}
                    {props.text}
                    {props.pathBack !== '' &&
                    <BackButton direction='slideInLeft' pathBack={props.pathBack}/>}
                    {props.pathNext !== '' &&
                    <NextButton direction='slideInRight' pathNext={props.pathNext} nextText={props.nextText}/>}
                {/* </Animation> */}
            </TextBox>
        </div>
    )
}

export default InfoBox
