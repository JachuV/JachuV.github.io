import React, { useState } from 'react';
import GalleryModule from './Gallery/GalleryModule';
import VideoGallery from './VideoGallery';
import "../../../mystyles.scss";

const Gallery = () => {
    const videos = [
        { id: 21, url: "https://www.youtube.com/watch?v=eWABpAXJnN4" },
        { id: 22, url: "https://www.youtube.com/embed/31j4frQQETE?si=S2v3XG9W-EUYTBxJ" },
        { id: 23, url: "https://www.facebook.com/watch/?v=7324787457613460" },
        { id: 24, url: "https://www.youtube.com/watch?v=ngiWRxHNCNE" },
    ];

    const [isModalActive, setIsModalActive] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    return (
        <section className="section is-fullheight">
            <div className="columns is-variable is-8 is-fullheight">
                <div className="column is-5-desktop is-full-mobile is-flex is-flex-direction-column pb-0 is-justify-content-center">
                    <h2 className="title has-text-centered gallery-title oswald-font-300 text-shadow has-text-weight-bold font-gallery-size">
                        Sprawdź moje ostatnie projekty
                    </h2>
                    <div className="has-text-centered">
                        <button
                            className="button is-primary is-large mt-6"
                            onClick={() => setIsModalActive(true)}
                        >
                            <b>Zobacz więcej</b>
                        </button>
                    </div>
                </div>
                <div className="column">
                    <GalleryModule 
                        videos={videos}
                        currentVideo={currentVideo}
                        onVideoSelect={setCurrentVideo}
                        columnWidth="is-half"
                    />
                </div>
            </div>

            {isModalActive && (
                <div className="modal is-active">
                    <div className="modal-background" onClick={() => setIsModalActive(false)} />
                    <div className="modal-card" style={{ margin: "0 10vw" }}>
                        <VideoGallery onClose={() => setIsModalActive(false)} />
                    </div>
                    <button 
                        className="modal-close is-large" 
                        onClick={() => setIsModalActive(false)}
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
