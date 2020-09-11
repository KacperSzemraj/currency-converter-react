import React from "react";
import { TextBox, ResultText, SourceAmount, TargetAmount } from "./styled";

const Result = ({ result }) => (
    result !== undefined && (
        <TextBox>
            <ResultText>
                <SourceAmount>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                </SourceAmount>
                    to&nbsp;w&nbsp;przeliczeniu
                <TargetAmount>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </TargetAmount>
            </ResultText>
        </TextBox>
    )
);

export default Result;