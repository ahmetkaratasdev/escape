import InfoBox from "../components/InfoBox";
import "./HomePage.css"

function Success() {
    const text = "Congratulations! You have saved princess Julia just in time! " +
    "We could not have done it without you!";

        
    return (
        <div className="layout">
            <InfoBox text={text} pathNext='/' pathBack='' nextText={'Start again'} />

        </div>
      )
}

export default Success;