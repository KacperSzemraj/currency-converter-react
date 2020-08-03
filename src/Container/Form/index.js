import React from "react";
import "./style.css";

const Form = () => (
    <form>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Uzupełnij dane</legend>
            <p>
                <label>
                    <span className="form__labelText">Kwota w zł*:</span>
                    <input placeholder="Podaj kwotę w zł" className="form__field js-amount" type="number" required
                        step="0.01" />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:
                            </span>
                    <select className="form__field">
                        <option value="USD">Dolar amerykański</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Funt brytyjski</option>
                        <option value="CHF">Frank szwajcarski</option>
                    </select>
                </label>
            </p>
            <button className="form__button">Przelicz</button>
        </fieldset>
    </form>
);

export default Form;