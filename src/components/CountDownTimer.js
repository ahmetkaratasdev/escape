
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);
    
    const navigate = useNavigate();

    const tick = () => {
        if (mins === 0 && secs === 0) {
            navigate('/failure')
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;