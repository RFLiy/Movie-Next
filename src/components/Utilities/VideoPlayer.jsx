"use client"

import { XSquare } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId} ) => {

    const [isOpen,setIsOpen] = useState(true)
    
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => ! prevState)
    }

    const option = {
        width: "450",
        height: "250"
    }

    const Player = () => {
        return(
            <div className="fixed bottom-2 right-5">
            <button onClick={handleVideoPlayer} className="float-right text-color-primary"><XSquare size={32} /></button>
            <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option}/>
        </div>
        )
    }

    const ButtonPlayer = () => {
        return (
            <button onClick={handleVideoPlayer} 
            className="fixed py-2 px-4 mt-3  bottom-5 right-5 rounded w-32
             bg-color-secondary
              text-color-primary
               hover:bg-color-accent 
                transition-all ">Watch Trailer</button>
        )
    }

    return isOpen ? <Player /> : <ButtonPlayer/>
   
}

export default VideoPlayer