import React from 'react'
import video from "../video/trav.mp4"
const Video = () => {
  return (
    <>
        <video width="500px"><source src={video} autoplay loop muted>

        </source></video>
        
    </>
  )
}

export default Video