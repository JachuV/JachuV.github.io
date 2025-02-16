import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FormularzKontaktowy() {
    const [state, handleSubmit] = useForm("xzzpnnbn"); // Zmień na swój własny identyfikator Formspree
    if (state.succeeded) {
        return <p className="notification is-success">Dziękujemy za wiadomość!</p>;
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div className="field">
                <label className="label has-text-main" htmlFor="email">
                    Adres e-mail
                </label>
                <div className="control">
                    <input
                        className="input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Wpisz swój email"
                        required
                    />
                </div>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={ state.errors }
                />
            </div>

            <div className="field">
                <label className="label has-text-main" htmlFor="message">
                    Wiadomość
                </label>
                <div className="control">
                    <textarea
                        className="textarea"
                        id="message"
                        name="message"
                        placeholder="Napisz swoją wiadomość"
                        required
                    />
                </div>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={ state.errors }
                />
            </div>

            <div className="field is-grouped">
                <div className="control has-text-main">
                    <button
                        className="button is-link"
                        type="submit"
                        disabled={ state.submitting }
                    >
                        Wyślij
                    </button>
                </div>
                <div className="control has-text-main">
                    <a
                        href="https://m.me/maks.laksowski/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-primary"
                    >
                        Napisz na Messengerze
                    </a>
                </div>
            </div>
        </form>
    );
}

function Aplikacja() {
    return (
        <div className="container">
            <div className="column is-half is-offset-one-quarter">
                <FormularzKontaktowy />
            </div>
        </div>
    );
}

export default Aplikacja;
