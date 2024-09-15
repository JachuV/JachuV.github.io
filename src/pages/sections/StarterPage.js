import * as React from "react"
import logo from "../../images/logo.png"
import "../../../mystyles.scss"

const StarterPage = () => {
    return (
        <section className="hero is-fullheight pt-6 main-section-background-image">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-variable is-8">
                        <div className="column is-half-desktop is-full-mobile">
                            <div className="is-flex is-flex-direction-column is-justify-content-space-evenly is-align-items-center is-fullheight">
                                <figure className="image is-inline-block is-128x128">
                                    <img className="is-rounded" src={ logo } alt="Logo"></img>
                                </figure>
                                <h1 className="title is-1 has-text-title has-black-stroke text-shadow has-text-weight-bold">
                                    Studio filmowe
                                </h1>
                                <h2 className="subtitle is-3 py-3 main-section-font-color has-black-stroke text-shadow has-text-weight-bold">
                                    - Mateusz Tórz -
                                </h2>
                                <div
                                    style={ {
                                        width: '100%'
                                    } }
                                    className="is-align-self-flex-end is-flex is-justify-content-space-evenly is-align-items-center"
                                >
                                    <button className="button is-primary">Kontakt</button>
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