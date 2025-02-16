import * as React from "react"
import logo from "../../images/logo.png"
import "../../../mystyles.scss"
import { Link } from "react-scroll";

const StarterPage = () => {
    return (
        <section className="section is-fullheight pt-6 main-section-background-image">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-variable is-8">
                        <div className="column is-half-desktop is-full-mobile">
                            <div className="is-flex is-flex-direction-column is-justify-content-space-evenly is-align-items-center is-fullheight">
                                <figure className="image is-inline-block is-128x128 mb-6 pb-6">
                                    <img
                                        className="is-rounded"
                                        src={ logo }
                                        alt="Logo"></img>
                                </figure>
                                <h1 className="title is-1 has-text-title oswald-font-300 text-shadow has-text-weight-bold">
                                    Studio Filmowe
                                </h1>
                                <h2 className="subtitle oswald-font-300 is-3 py-3 main-section-font-color text-shadow has-text-weight-bold">
                                    - Mateusz Tórz -
                                </h2>
                                <div className="is-align-items-center">
                                    <Link to="contact-section" smooth={ true } duration={ 500 } spy={ true }>
                                        <button className="button is-primary">Kontakt</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StarterPage;