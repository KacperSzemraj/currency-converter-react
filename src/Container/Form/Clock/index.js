import React, { useState, useEffect } from 'react';
import "./style.css";

const dateTemplate = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date();
            setCurrentTime(newDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    return (
        <p className="form__clock"> Dzisiaj jest {currentTime.toLocaleDateString(undefined, dateTemplate)}</p>
    )
}

export default Clock;