import "./Riddle.css"
import { Link } from 'react-router-dom';

function Riddle(props) {
    return (
        <div className="riddle-container">
            <Link to={props.path} className="riddle">{props.text}</Link>
        </div>
    )
}

export default Riddle;