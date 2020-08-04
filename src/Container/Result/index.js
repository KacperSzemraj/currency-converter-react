import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <div className="resultTextBox">
        <span className="resultText">
            {result !== undefined && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                    to w przeliczeniu&nbsp;
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </>
            )}
        </span>
    </div>
);

export default Result;