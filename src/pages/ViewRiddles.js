import BackButton from "../components/BackButton";
import "./Pages.css"

function ViewRiddles() {
    return (
        <div className="layout">
            <div className="riddleContainer">
                <span className="riddle">Riddle 1</span>
            </div>
            <div className="riddleContainer"> 
                <span className="riddle">Riddle 2</span>
            </div>
            <div className="riddleContainer"> 
                <span className="riddle">Riddle 3</span>
            </div>            
            <BackButton pathBack='/riddlepage' />
        </div>

    )
}

export default ViewRiddles;