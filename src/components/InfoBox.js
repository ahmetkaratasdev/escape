import './InfoBox.css';
import NextButton from './NextButton.js';
import BackButton from './BackButton.js';

function InfoBox(props) {

    return (
        <div className="text-box">
            <div>{props.text}</div>
            {props.pathBack !== '' &&
            <BackButton pathBack={props.pathBack}/>}
            {props.pathNext !== '' &&
            <NextButton pathNext={props.pathNext} nextText={props.nextText}/>}
        </div>
    )
}

export default InfoBox;