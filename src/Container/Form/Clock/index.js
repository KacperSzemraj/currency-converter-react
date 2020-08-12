import React from 'react';
import { ClockWrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockWrapper>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </ClockWrapper>
    )
};

export default Clock;