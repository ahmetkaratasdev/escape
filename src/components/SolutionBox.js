import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SolutionBox.css"
function SolutionBox(props) {


    const [sol, setSol] = useState("");
    const [correct, setCorrect] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (sol === props.solution) {
            setCorrect(true);
            if (props.solution === '6232427227') {
                navigate('../../success')
            }
        } else {
            setCorrect(false);
        }

        console.log(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label className='solution-label'>
                <input type="text" className="form-control" value={sol} onChange={(e) => setSol(e.target.value)} />
                <input type="submit" className="solution-submit" onClick={(e) => {console.log('comes here too')}}/>
            </label>

            {correct &&
            <div>{props.correctText}</div>} 

            {/* {correct && props.solution === '6232427227' &&
            navigate('../homepage')} */}

            {!correct &&
            <div>Correct solution has not been entered yet!</div>} 
           
        </form>
    )
}

export default SolutionBox;

/*
    1. Keep madagascar tab there when I'm doing it
    2. Do I need to have the ReactDOM.render, what does <Outlet> do?

    Things I gotta do:
    - Have a "give up" button at the top

*/