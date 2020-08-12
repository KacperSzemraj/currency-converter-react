import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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

    return date;
}