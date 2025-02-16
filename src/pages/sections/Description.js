import React from "react";

const Description = () => {
    return (
        <section className="section is-fullheight">
            <div className="container">
                <div className="has-text-centered">
                    <h2 className="title oswald-font-300 text-shadow is-1 mb-6 pb-6 has-text-title">Czym się zajmuję</h2>
                </div>
                <div className="columns is-flex is-align-items-stretch">
                    <div className="column box description-text-box">
                            <h3 className="title oswald-font-300 is-2 has-text-centered text-shadow main-section-font-color">Montaż</h3>
                            <p className="has-text-main">Zmontuję Twój film na YouTube, TikTok, Facebook czy Instagram w każdym formacie i stylu!<br />
                            Profesjonalny montaż przyciągnie uwagę widzów i zoptymalizuje zasięg oraz zaangażowanie.
                            Dzięki mojemu doświadczeniu Twój materiał wyróżni się na tle konkurencji
                            </p>
                    </div>
                    <div className="column box description-text-box">
                            <h3 className="title oswald-font-300 is-2 has-text-centered text-shadow main-section-font-color-blue">Filmowanie</h3>
                            <p className="has-text-main is-fullheight">
                                Tworzę filmy od A do Z - od nagrywania po montaż! Realizuję filmy ślubne, reklamowe, teledyski oraz relacje z eventów, a to tylko jedna z wielu możliwości.<br />
                                Dzięki indywidualnemu podejściu i dbałości o detale, każda produkcja wyróżnia się najwyższą jakością i unikalnym stylem.
                            </p>
                    </div>
                </div>
                <div className="image is-2-by-1">
                    <img src="https://picsum.photos/1200/600" />
                </div>
            </div>
        </section>
    )
};

export default Description;