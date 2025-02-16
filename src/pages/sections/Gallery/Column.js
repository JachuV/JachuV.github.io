import React from "react";
import ReactPlayer from "react-player";

const Column = (props) => {
    const isFacebookVideo = ReactPlayer.canPlay(props.url) && props.url.includes("facebook");
    return (
        <div className="column is-half-desktop is-full-tablet">
            <figure className="image is-3by2 has-ratio is-rounded" style={ { backgroundColor:"#000000" } }>
                {
                    isFacebookVideo ? (
                        <div className="fb-video-wrapper">
                            <ReactPlayer url={ props.url } playIcon={ false } width="100%" height="100%" />
                        </div>
                    ) : (
                            <ReactPlayer url={ props.url } playIcon={ false } width="100%" height="100%" />
                    )
                }
            </figure>
        </div>
    );
};

export default Column;

