import React from 'react';
import Gallery from './Gallery';

const About = () => {
    return (
        <section className="container pt-6 mb-6">
            <div className="columns is-variable is-8 is-fullheight mt-6 pb-1">
                <div className="column is-one-third-desktop is-full-mobile is-flex is-flex-direction-column pb-0">
                    <div className=" is-flex-grow-1">
                        <h2 className="title gallery-title has-text-title anton-regular text-shadow has-text-weight-bold p-1">
                            Sprawdź moje ostatnie projekty
                        </h2>
                    </div>
                    <div className="has-text-centered">
                        <button
                            className="button is-primary is-large mt-3"
                            aria-label="Zobacz więcej projektów"
                            style={ { width: 'auto' } } 
                        >
                            Zobacz więcej
                        </button>
                    </div>
                </div>
                <div className="column"><Gallery /></div>
            </div>
        </section>
    )
}

export default About;
