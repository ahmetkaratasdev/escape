import React from 'react';
import { useNavigate } from "react-router-dom";

function Welcome() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = './problem';
        navigate(path);
    }

    return (
        <div className='welcome-page'>
            <div className='header'>Cyber Escape Room</div>
            <div className='text-box'>
                <div className='text'>
                    You made it! We need your help!
                </div>
                <button className='back' onClick={routeChange}>
                    Back
                </button>

                {/* <button className='back' onClick={routeChange1}>
                    Next
                </button> */}
            </div>
        </div>
    )
}



export default Welcome;