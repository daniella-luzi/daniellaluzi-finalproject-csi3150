import { useState, useEffect } from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());

    //getting the time and updating it every second
    useEffect(() => {
        const intervalNum = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //cleanup function for unmounting
        return () => {
            clearInterval(intervalNum);
        }
    }, []);

    //using the localetimestring method to format the time for 12-hour clock
    function formatTime() {
        let formattedClock = time.toLocaleTimeString([], {
            hours: '2-digit',
            minutes: '2-digit',
            seconds: '2-digit',
            hour12: true
        })

        return formattedClock;
    }

    return(
        <div className="clockContainer">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}


export default Clock;