import React from "react";
import VideoPlayer from 'react-video-js-player'

const VideoJS = (props) => {
    const link = props.link
    const poster = "./images/" + props.poster + ".jpg"

    return (
        <>
            <VideoPlayer 
            src = {link}
            poster = {poster}
            width = "720"
            height = "420"
            />
        </>
    )

}

export default VideoJS