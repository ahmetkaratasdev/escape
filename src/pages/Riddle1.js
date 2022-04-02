import InfoBox from "../components/InfoBox";
import SolutionBox from "../components/SolutionBox";

function Riddle1() {

    const text = "gurahzorevfuvqqravagurarkggnfx";
    return (
        <div className="layout">
            <h1>Riddle 1</h1>
            <div className="riddle-text">Decrypt the message below and enter its plaintext </div>
            <InfoBox text={text} pathNext='' pathBack='' />
            <SolutionBox />
        </div>
    )
}

export default Riddle1;