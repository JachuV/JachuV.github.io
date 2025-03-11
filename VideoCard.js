import React from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ 
    video, 
    isPlaying, 
    onPlay, 
    onPause, 
    columnWidth = "is-one-third" 
}) => (
    <div className={`column ${columnWidth}`}>
        <div className="card">
            <div className="card-image">
                <figure className="image is-16by9">
                    <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="100%"
                        playing={isPlaying}
                        controls
                        onPlay={onPlay}
                        onPause={onPause}
                    />
                </figure>
            </div>
            {video.tags?.length > 0 && (
                <div className="card-content">
                    <div className="tags">
                        {video.tags.map(tag => (
                            <span key={tag} className={`tag ${tag.toLowerCase()} is-light`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default VideoCard;
