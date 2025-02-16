import React, { useState, useRef } from 'react';
import GalleryModule from './Gallery/GalleryModule';
import "../../../mystyles.scss";
import VideoGallery from './VideoGallery';

const Gallery = () => {
    const videos = [
        { key: 31, id: 21, url: "https://www.youtube.com/watch?v=eWABpAXJnN4" },
        { key: 32, id: 22, url: "https://www.youtube.com/embed/31j4frQQETE?si=S2v3XG9W-EUYTBxJ" },
        { key: 33, id: 23, url: "https://www.facebook.com/watch/?v=7324787457613460" },
        { key: 34, id: 24, url: "https://www.youtube.com/watch?v=ngiWRxHNCNE" },
    ];

    const [isModalActive, setIsModalActive] = useState(false);
    const [selectedTag, setSelectedTag] = useState('');
    const [playingVideoId, setPlayingVideoId] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [videoPosition, setVideoPosition] = useState({});
    const videoRefs = useRef({});

    const handleOpenModal = () => {
        setIsModalActive(true);
    };

    const handleCloseModal = () => {
        setIsModalActive(false);
    };

    const handlePlay = (videoId) => {
        if (playingVideoId !== videoId) {
            setPlayingVideoId(videoId);
        }
        setPlaying(true);
    };

    const handlePause = () => {
        setPlaying(false);
    };

    return (
        <section className="section is-fullheight">
            <div className="columns is-variable is-8 is-fullheight">
                <div className="column is-5-desktop is-full-mobile is-flex is-flex-direction-column pb-0 is-justify-content-center">
                    <div className="">
                        <h2 className="title has-text-centered gallery-title has-text-title oswald-font-300 text-shadow has-text-weight-bold font-gallery-size">
                            Sprawdź moje ostatnie projekty
                        </h2>
                    </div>
                    <div className="has-text-centered">
                        <button
                            className="button is-primary is-large mt-6"
                            aria-label="Zobacz więcej projektów"
                            style={ { width: 'auto' } }
                            onClick={ handleOpenModal }
                        >
                            <b>Zobacz więcej</b>
                        </button>
                    </div>
                </div>
                <div className="column">
                    <GalleryModule
                        videos={ videos }
                        selectedTag={ selectedTag }
                        playingVideoId={ playingVideoId }
                        playing={ playing }
                        handlePlay={ handlePlay }
                        handlePause={ handlePause }
                        videoRefs={ videoRefs }
                        videoPosition={ videoPosition }
                        columnWidth={ "is-half" }
                    />
                </div>
            </div>

            {/* Modal */ }
            <div className={ `modal ${isModalActive ? 'is-active' : ''}` } id="image-modal">
                <div className="modal-background" onClick={ handleCloseModal }></div>
                <div className="modal-card" style={ { marginLeft: "10vw", marginRight: "10vw"}}>
                    <VideoGallery
                        onClose={ handleCloseModal }
                        playing={ playing }
                        onPause={ handlePause }
                    />
                </div>
                <button className="modal-close is-large" aria-label="close" id="image-modal-close" onClick={ handleCloseModal }></button>
            </div>
        </section>
    );
};

export default Gallery;
