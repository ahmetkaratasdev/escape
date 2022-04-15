import CountDownTimer from "../components/CountDownTimer";
import InfoBox from "../components/InfoBox";
import Riddle from "../components/Riddle";
import styles from './RiddlePage.css';

function RiddlePage() {
    const text = "Solve the three riddles to unlock the door. You will likely need to solve the " +
    "first two riddles in order to solve the last!";

    return (
        <div className="layout">
            <div className={`${styles.popup-text}`}>The popup message on the screen says...</div>
            <InfoBox text={text} pathNext='' pathBack='../'/>
            <div className="riddles anim-left">
                <Riddle path="../riddle1" text="Riddle 1" />
                <Riddle path="../riddle2" text="Riddle 2" />
                <Riddle path="../riddle3" text="Riddle 3" />
            </div>

            <div>
                <img className="gates-image" src={require("../images/mac.jpeg")} alt={"Image of a locked gate"}/>
            </div>
            
        </div>
      )
}

export default RiddlePage;