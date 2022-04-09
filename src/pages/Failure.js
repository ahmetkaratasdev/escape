import InfoBox from "../components/InfoBox";
import "./HomePage.css"

function Failure() {
    const text = `Oh no, times up! The room is now filled with water :( ` +
    `You look down in misery until a small robot waddles to you and says, "Hello, I ` +
    `am Timmy the Time Robot. I can take you back 30 minutes in time. Would you like ` +
    `to make another attempt in saving princess Julia?"`;

    return (
        <div className="layout">
            <InfoBox text={text} pathNext='/gameroutes' pathBack='' nextText={'YES!'} />

            <div>
                <img className="gates-image" src={require("../images/timemachine.jpeg")} alt={"Image of a locked gate"}/>
            </div>
        </div>
      )
}

export default Failure;