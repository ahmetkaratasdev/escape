import "./Riddle.css"
import { Link, useNavigate } from 'react-router-dom';

function Riddle(props) {

    const navigate = useNavigate();

    return (
        <div className="riddle-container" onClick={() => navigate(props.path)}>
            {props.text}
        </div>
    )
}

export default Riddle;