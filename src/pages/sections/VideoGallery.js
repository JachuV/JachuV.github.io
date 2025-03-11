import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import 'bulma/css/bulma.css';
import GalleryModule from "./Gallery/GalleryModule";

const VideoGallery = ({ onClose, playing, onPause }) => {
        const [videos, setVideos] = useState([]);  // Stan na filmy
        //     
            const [playingVideoId, setPlayingVideoId] = useState(null);
                const [playing, setPlaying] = useState(false);
                const [videoPosition, setVideoPosition] = useState({});
                
                const videoRefs = useRef({});
                
                useEffect(() => {
                    // Wczytaj dane z pliku JSON
                    fetch('/videosData.json').then(response => response.json()).then(data => {setVideos(data);}).catch(error => console.error('Error fetching video data:', error));}, []);
                    const uniqueTags = Array.isArray(videos) ? [...new Set(videos.map(video => video.tags).flat())] : [];
                    
                    const handleTagClick = (tag) => {
                        setSelectedTag(tag);
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
                        
                        const updateVideoPosition = (videoId) => {
                            const videoElement = videoRefs.current[videoId];
                            if (videoElement) {
                                const boundingRect = videoElement.getBoundingClientRect();
                                const centerX = window.innerWidth / 2;
                                const centerY = window.innerHeight / 2;
                                const translateX = centerX - (boundingRect.left + boundingRect.width / 2);
                                const translateY = centerY - (boundingRect.top + boundingRect.height / 2);
                                setVideoPosition({
                                    [videoId]: { transform: `translate(${translateX}px, ${translateY}px) scale(2)`, zIndex: 10 },
                                });
                            }
                        };
                        
                        useEffect(() => {
                            if (playingVideoId && playing) {
                                updateVideoPosition(playingVideoId);
                            }
                        }, [playingVideoId, playing]);
                        
                        
                        
                        return (
                            <>
                                <div className="modal-card is-fullheight">
                                    <div className="tags-container">
                                        <div className="tags is-centered montaz-filmowanie-container">
                                            <span
                                                className={ `tag montaz ${selectedTag === 'Montaż' ? 'is-info' : ''}` }
                                                onClick={ () => handleTagClick('Montaż') }
                                                style={ { cursor: 'pointer' } }
                                            >
                                                Montaż
                                            </span>
                                            <span
                                                className={ `tag filmowanie ${selectedTag === 'Filmowanie' ? 'is-info' : ''}` }
                                                onClick={ () => handleTagClick('Filmowanie') }
                                                style={ { cursor: 'pointer' } }
                                            >
                                                Filmowanie
                                            </span>
                                        </div>
                                        <div className="tags is-centered">
                                            { uniqueTags.filter(tag => tag !== 'Montaż' && tag !== 'Filmowanie').map(tag => (
                                                <span
                                                    key={ tag }
                                                    className={ `tag ${tag === selectedTag ? 'is-info' : 'is-light'} ${tag.toLowerCase()}` }
                                                    onClick={ () => handleTagClick(tag) }
                                                    style={ { cursor: 'pointer' } }
                                                >
                                                    { tag }
                                                </span>
                                            )) }
                                        </div>
                                    </div>
                                    <section className="modal-card-body">
                                        {videos.length > 0 ? (
                                            <GalleryModule
                                                videos={videos}
                                                selectedTag={selectedTag}
                                                playingVideoId={playingVideoId}
                                                playing={playing}
                                                handlePlay={handlePlay}
                                                handlePause={handlePause}
                                                videoRefs={videoRefs}
                                                videoPosition={videoPosition}
                                            />
                                            ) : (
                                                <p>Ładowanie filmów...</p> // Lub inny loader
                                        )}
                                    </section>
                                </div>
                            </>
                        );
                    };
                    
                    export default VideoGallery;
                    