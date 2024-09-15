import React, { useState } from "react"
import "../../../../mystyles.scss"
const Column = (props) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const getYouTubeThumbnail = (url) => {
        let videoId = '';

        // Obs�uga pe�nych link�w YouTube z parametrem v
        if (url.includes('youtube.com') && url.includes('v=')) {
            const urlParams = new URLSearchParams(new URL(url).search);
            videoId = urlParams.get('v');
        }
        // Obs�uga skr�conych link�w YouTube
        else if (url.includes('youtu.be')) {
            videoId = url.split('youtu.be/')[1];
        }
        // Obs�uga link�w w formacie embed
        else if (url.includes('youtube.com/embed/')) {
            videoId = url.split('embed/')[1].split('?')[0]; // Wyodr�bnienie ID wideo przed parametrami URL
        }

        // Je�li `videoId` jest undefined lub pusty, loguj b��d i zwr�� obraz zast�pczy
        if (!videoId) {
            console.error('Nieprawid�owy link do YouTube: ', url);
            return 'https://via.placeholder.com/560x315?text=No+Thumbnail';  // Zast�pcza miniaturka
        }

        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };


	return (
        <div className="column is-half-desktop is-full-tablet">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by2">
                        { isVideoPlaying ? (
                            <iframe
                                className="has-ratio"
                                width="560"
                                height="315"
                                src={ `${props.link}?autoplay=1&mute=1&rel=0` }
                                title="YouTube video player"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="autoplay"
                                allowFullScreen>
                            </iframe>
                        ) : (
                            <button
                                    onClick={ () => setIsVideoPlaying(true) }
                                    style={ { border: 'none', padding: 0, background: 'transparent', cursor: 'pointer' } }
                                    aria-label="Play video"
                                    >
                                    <img
                                        src={ getYouTubeThumbnail(props.link) }
                                        alt="Video thumbnail"
                                        style={ { width: '100%', height: 'auto' } }
                                    />
                                </button>
                        ) }
                    </figure>
                </div>
            </div>
        </div>
	)
}

export default Column