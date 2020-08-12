import React, { useState } from "react";
import { currencies } from "../../currencies";
import Clock from './Clock';
import { Fieldset, Legend, LabelText, Input, Select, Button } from "./styled";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Uzupełnij dane</Legend>
                <Clock />
                <p>
                    <label>
                        <LabelText>
                            Kwota w zł*:
                        </LabelText>
                        <Input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Podaj kwotę w zł"
                            type="number"
                            required
                            step="0.01"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>
                            Waluta:
                        </LabelText>
                        <Select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </Select>
                    </label>
                </p>
                <Button>Przelicz</Button>
            </Fieldset>
        </form>
    );
};

export default Form;