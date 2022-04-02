import InfoBox from "../components/InfoBox";
import Riddle from "../components/Riddle";
import './RiddlePage.css';

function RiddlePage() {
    const text = "Solve the three riddles to unlock the door. You will likely need to solve the " +
    "first two riddles in order to solve the last!";

    return (
        <div className="layout">
            <div className="popup-text">The popup message on the screen says...</div>
            <InfoBox text={text} pathNext='' pathBack='/homepage'/>
            <Riddle path="/riddle1" text="Riddle 1" />
            <Riddle path="/riddle2" text="Riddle 2" />
            <Riddle path="/riddle3" text="Riddle 3" />

            {/* <div className="riddleContainer">
                <span className="riddle">Riddle 1</span>
            </div>
            <div className="riddleContainer"> 
                <span className="riddle">Riddle 2</span>
            </div>
            <div className="riddleContainer"> 
                <span className="riddle">Riddle 3</span>
            </div>   */}
            <div>
                <img className="gates-image" src={require("../images/mac.jpeg")} alt={"Image of a locked gate"}/>
            </div>
            
        </div>
      )
}

export default RiddlePage;