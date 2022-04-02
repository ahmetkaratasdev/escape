import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function SolutionBox() {

    const actualSol = "thenumberishiddeninthenexttask";

    const [sol, setSol] = useState("");
    const [correct, setCorrect] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(sol)
        if (sol === actualSol) {
            console.log('true')
            setCorrect(true);
        } else {
            setCorrect(false);
        }
        // console.log('solution entered is ' + sol);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={sol} onChange={(e) => setSol(e.target.value)} />
                <input type="submit" />
                {correct &&
                <div>Correct!</div>} 
            </label>
        </form>
    )
}

export default SolutionBox;