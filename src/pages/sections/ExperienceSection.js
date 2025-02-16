import * as React from "react";
import { FaAward, FaCogs, FaClock, FaLightbulb } from "react-icons/fa";

const ExperienceSection = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-multiline has-text-centered is-8">
                    <div className="column is-half-desktop">
                        <div>
                            <FaAward size={ 48 } className="experience-icon-color" />
                            <h3 className="title is-4 mt-3 has-text-title">3 lata doświadczenia</h3>
                            <p className="has-text-main">
                                Od 3 lat zajmuję się montażem filmów. To, co kiedyś było tylko
                                moją pasją, z biegiem czasu stało się wyjątkową pracą.
                            </p>
                        </div>
                    </div>

                    <div className="column is-half-desktop">
                        <div>
                            <FaCogs size={ 48 } className="experience-icon-color" />
                            <h3 className="title is-4 mt-3 has-text-title">Jakość</h3>
                            <p className="has-text-main">
                                Korzystam z profesjonalnych programów do montażu, takich jak
                                Adobe Premiere Pro, After Effects i Photoshop, które
                                umożliwiają mi tworzenie profesjonalnych i dopracowanych
                                projektów.
                            </p>
                        </div>
                    </div>

                    <div className="column is-half-desktop">
                        <div>
                            <FaClock size={ 48 } className="experience-icon-color" />
                            <h3 className="title is-4 mt-3 has-text-title">Czas realizacji</h3>
                            <p className="has-text-main">
                                Zawsze staram się, aby proces montażu był jak najbardziej
                                efektywny, dzięki czemu mogę dotrzymywać ustalonych terminów i
                                zrealizować projekty na czas. Cenię sobie terminowość, bo wiem,
                                jak ważne są te momenty dla moich klientów.
                            </p>
                        </div>
                    </div>

                    <div className="column is-half-desktop">
                        <div>
                            <FaLightbulb size={ 48 } className="experience-icon-color" />
                            <h3 className="title is-4 mt-3 has-text-title">Na bieżąco</h3>
                            <p className="has-text-main">
                                Zawsze jestem na bieżąco z tym, co dzieje się w polskim i
                                zagranicznym internecie. Obserwuję najnowsze trendy i wprowadzam
                                kreatywne rozwiązania do moich projektów.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
