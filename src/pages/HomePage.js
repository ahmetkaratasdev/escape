import InfoBox from "../components/InfoBox";
import "./HomePage.css"
import CountDownTimer from "../components/CountDownTimer";
import Header from "../components/Header";

function HomePage() {
    const text = "The door below is digitally operated and locked. You try " +
    "to brute force it but it will not budge. You then see a computer on the right " +
    "with a popup open.";
        
    return (
        <div className="layout">
            <InfoBox text={text} pathNext='riddlepage' pathBack='' nextText={'View The Popup'} />
            <div>
                <img className="gates-image" src={require("../images/orangeGate.jpeg")} alt={"Image of a locked gate"}/>
            </div>
            
        </div>
      )
}

export default HomePage;