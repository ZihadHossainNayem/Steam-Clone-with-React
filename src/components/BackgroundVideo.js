import React from "react";
/* import video */
import heroBGVideo from "../assets/steamBG.webm";

const BackgroundVideo = () => {
  return (
    <div className="w-full lg:h-[470px] h-[300px] lg:absolute lg:z-[50] static">
      <video
        src={heroBGVideo}
        autoPlay
        loop
        muted
        className="w-[100%] h-[100%] object-cover"
      />
    </div>
  );
};

export default BackgroundVideo;
