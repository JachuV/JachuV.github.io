import React, { useState, useEffect } from "react";
import GalleryModule from "./Gallery/GalleryModule";

const VideoGallery = ({ onClose }) => {
    const [videos, setVideos] = useState([]);  // Stan na filmy
    const [playingVideoId, setPlayingVideoId] = useState(null);
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        fetch('/videosData.json')
            .then(response => response.json())
            .then(setVideos)
            .catch(error => console.error('Error fetching video data:', error));
    }, []);

    const uniqueTags = Array.isArray(videos)
        ? [...new Set(videos.map(video => video.tags).flat())]
        : [];

    return (
        <div className="modal-card is-fullheight">
            <header className="modal-card-head">
                <p className="modal-card-title">Galeria</p>
                <button
                    className="delete"
                    aria-label="close"
                    onClick={onClose}
                />
            </header>

            <div className="tags-container">
                <div className="tags is-centered">
                    {uniqueTags.map(tag => (
                        <span
                            key={tag}
                            className={`tag ${selectedTag === tag ? 'is-info' : 'is-light'}`}
                            onClick={() => setSelectedTag(tag)}
                            style={{ cursor: 'pointer' }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <section className="modal-card-body">
                {videos.length > 0 ? (
                    <GalleryModule
                        videos={videos}
                        selectedTag={selectedTag}
                        currentVideo={playingVideoId}
                        onVideoSelect={setPlayingVideoId}
                    />
                ) : (
                    <p>Ładowanie filmów...</p>
                )}
            </section>
        </div>
    );
};

export default VideoGallery;