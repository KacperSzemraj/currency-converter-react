import styled from "styled-components";

export const Fieldset = styled.fieldset`
    padding: 20px;
    border: 1px solid #222222;
    border-radius: 4px;
    box-shadow: 1px 1px #222222;
`;

export const Legend = styled.legend`
    background-color: hsl(120, 100%, 90%);
    padding: 10px;
    border: 1px solid #222222;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const LabelText = styled.label`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 5px;
    text-align: left;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: 1px solid #222222;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;

    &:required {
        background-color: hsl(0, 100%, 95%);
    }
`;

export const Select = styled.select`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: 1px solid #222222;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const Button = styled.button`
    margin: 10px auto;
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background-color: hsl(120, 100%, 90%);
    }

    &:active {
        background-color: hsl(120, 100%, 80%);
    }
`;