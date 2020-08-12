import React, { useState, useEffect } from 'react';
import { ClockWrapper } from "./styled";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date();
            setDate(newDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    return (
        <ClockWrapper>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </ClockWrapper>
    )
};

export default Clock;