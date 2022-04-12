import InfoBox from "../components/InfoBox";
import SolutionBox from "../components/SolutionBox";

function Riddle1() {

    const text = "gurahzorevfuvqqravagurarkggnfx";
    const solution = "thenumberishiddeninthenexttask";
    const correctText = "Correct! This solution will come in handy for future riddles!"
    
    return (
        <div className="layout">
            <h1>Riddle 1</h1>
            <div className="riddle-text">Decrypt the message below and enter its plaintext (Easy)</div>
            <InfoBox text={text} pathNext='' pathBack='../riddlepage' />
            <SolutionBox solution={solution} correctText={correctText} />
        </div>
    )
}

// there's a question in the labs that's about useLocalStorage
export default Riddle1;