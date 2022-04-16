import BackButton from "../components/BackButton";
import SolutionBox from "../components/SolutionBox";
import './Riddle3.css'
import { Animation } from "../components/SlideAnimation"

function Riddle3() {

    const solution = '6232427227';
    const correctText = "Correct! Door is opening..."
    return (
        <div className="layout">
            <Animation>
                <h1>Riddle 3</h1>
                <div className="riddle-text">Call the correct number </div>
                <BackButton direction="slideInLeft" pathBack='../riddlepage' riddle3='true' />
                <div>
                    <img className="gates-image" src={require("../images/phone.jpeg")} alt={"Image of a locked gate"}/>
                </div>
                <SolutionBox solution={solution} correctText={correctText}/>
            </Animation>
        </div>
    )
}

export default Riddle3;