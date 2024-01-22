import React, { useEffect } from 'react';
import video from "../videos/lim1.mp4";
import video2 from "../videos/lim2_Trim.mp4";
import video3 from "../videos/lim3.mp4";
import Aos from 'aos';
import "aos/dist/aos.css";
import "./video_empaque.css"

const Contenido3 = () => {

  useEffect(() => {
    Aos.init({ });
  }, []);

  return (
    <div className="videos">
    <video src={video} className="videos"  data-aos="zoom-in" autoPlay loop muted disablePictureInPicture disableRemotePlayback/>
    <video src={video2} className="videos" data-aos="zoom-in" autoPlay loop muted disablePictureInPicture disableRemotePlayback/>
    <video src={video3} className="videos" data-aos="zoom-in" autoPlay loop muted disablePictureInPicture disableRemotePlayback/>
    </div>
  
  );
}

export default Contenido3;
