import React from "react"
import VideoCard from "../VideoCard"

const GalleryModule = ({
    videos,
    selectedTag,
    currentVideo,
    onVideoSelect,
    columnWidth = "is-one-third"
}) => {
    if (!videos?.length) {
        return <p>Brak filmów do wyświetlenia</p>;
    }

    const filteredVideos = videos.filter(
        video => !selectedTag || video.tags?.includes(selectedTag)
    );

    return (
        <div className="columns is-multiline">
            {filteredVideos.map(video => (
                <VideoCard
                    key={video.id}
                    video={video}
                    isPlaying={currentVideo === video.id}
                    onPlay={() => onVideoSelect(video.id)}
                    onPause={() => onVideoSelect(null)}
                    columnWidth={columnWidth}
                />
            ))}
        </div>
    );
};

export default GalleryModule;
