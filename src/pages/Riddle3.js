import BackButton from "../components/BackButton";
import SolutionBox from "../components/SolutionBox";
import './Riddle3.css'

function Riddle3() {

    const solution = '6232427227';
    const correctText = "Correct! Door is opening..."
    return (
        <div className="layout">
            <h1>Riddle 3</h1>
            <div className="riddle-text">Call the correct number </div>
            <BackButton pathBack='../riddlepage' />
            <div>
                <img className="gates-image" src={require("../images/phone.jpeg")} alt={"Image of a locked gate"}/>
            </div>
            <SolutionBox solution={solution} correctText={correctText}/>
        </div>
    )
}

export default Riddle3;