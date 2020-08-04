import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <div className="result__textBox">
        <span className="result__text">
            {result !== undefined && (
                <>
                    <span className="result__sourceAmount">
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                    </span>
                    to w przeliczeniu&nbsp;
                    <span className="result__targetAmount">
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </span>
                </>
            )}
        </span>
    </div>
);

export default Result;