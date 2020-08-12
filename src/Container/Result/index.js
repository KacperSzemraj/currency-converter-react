import React from "react";
import { TextBox, ResultText, SourceAmount, TargetAmount } from "./styled";

const Result = ({ result }) => (
    <TextBox>
        <ResultText>
            {result !== undefined && (
                <>
                    <SourceAmount>
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                    </SourceAmount>
                    to w przeliczeniu&nbsp;
                    <TargetAmount>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </TargetAmount>
                </>
            )}
        </ResultText>
    </TextBox>
);

export default Result;