import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact-section" className="section is-large">
            <div className="container">
                <h2 className="title is-1 is-1 has-text-centered oswald-font-300 text-shadow has-text-title">Kontakt</h2>
                <ContactForm/>
            </div>
        </section>
    );
}

export default Contact;