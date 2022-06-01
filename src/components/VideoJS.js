import React from "react";
import VideoPlayer from 'react-video-js-player';

const VideoJS = (props) => {
    console.log(props.src)
    console.log(props.poster)
    const link = props.src
    const poster = "images/" + props.poster + ".jpg"

    console.log(link)

    return (
        <div className="videoplayer">
            <VideoPlayer 
            src = {link}
            poster = {poster}
            width = "300"
            />
        </div>
    )

}

export default VideoJS