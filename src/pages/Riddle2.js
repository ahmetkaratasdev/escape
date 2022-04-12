import BackButton from "../components/BackButton";
import SolutionBox from "../components/SolutionBox";
import InfoBox from "../components/InfoBox";
function Riddle2() {

    let text = 'Your academia music wizards nausea abandoning grampa aged ' +
    'zebra arm abs alveoli adoring kuala angel of crane accomplish giant'

    const solution = "madagascar";
    const correctText = "Correct! This solution will come in handy for future riddles";

    return (
        <div className="layout">
            <h1>Riddle 2</h1>
            <p>Find the flag (all lower case)</p>
            <InfoBox text={text} pathNext='' pathBack='../riddlepage' />
            <SolutionBox solution={solution} correctText={correctText}/>
        </div>
    )
}

export default Riddle2;