import * as React from "react"
import VideoCard from "../VideoCard"

const GalleryModule = ({
    videos,
    selectedTag,
    playingVideoId,
    playing,
    handlePlay,
    handlePause,
    videoRefs,
    videoPosition,
    columnWidth="is-one-third"
}) => {
     if (!videos || videos.length === 0) {
        return <p>Brak filmów do wyœwietlenia</p>;
    }

    return (
        <div className="columns is-multiline" style={{position:"absolute"}}>
            { Array.isArray(videos) &&
                videos
                    .filter(video => !selectedTag || video.tags.includes(selectedTag))
                    .map(video => (
                        <VideoCard
                            key={ video.id }  
                            video={ video }
                            isPlaying={ playingVideoId === video.id && playing }
                            onPlay={ () => handlePlay(video.id) }
                            onPause={ handlePause }
                            videoRef={ (el) => (videoRefs.current[video.id] = el) }
                            style={ videoPosition[video.id] || {} }
                            columnWidth={ columnWidth }
                            className="is-rounded"
                        />
                    )) }
        </div>
    )
}

export default GalleryModule
