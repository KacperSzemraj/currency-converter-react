import React, { useState } from "react";
import { currencies } from "../../currencies";
import "./style.css";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Uzupełnij dane</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w zł*:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Podaj kwotę w zł"
                            className="form__field"
                            type="number"
                            required
                            step="0.01"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Waluta:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <button className="form__button">Przelicz</button>
            </fieldset>
        </form>
    );
};

export default Form;