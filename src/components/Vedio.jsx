import React, { useRef, useState } from "react";
import Icon from "./Icon";
import '../assets/scss/Components.scss'

export default function Video({ src, title, ...props }){
    const videoRef = useRef(null);

    const [isPlaying, setisPlaying] = useState(false)
    const [Progress, setProgress] = useState(0)
    const [Volume, setVolume] = useState(1)

    const play = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setisPlaying(true)
        }else{
            video.pause();
            setisPlaying(false);
        }
    };

    return (
        <div className="vedio_wrapper">
            <span className="Vedio_duration">{videoRef.current?.duration.toFixed(2)}</span>
            <video ref={videoRef} src={src} className="video" controls={false} onEnded={() => setisPlaying(false)} ></video>
            <button onClick={play}>
            {isPlaying ? <Icon name="IoIosPause" />:<Icon name="IoMdPlay" />}
            </button>
            <h4>
                {title}
            </h4>
        </div>
    )

    
}