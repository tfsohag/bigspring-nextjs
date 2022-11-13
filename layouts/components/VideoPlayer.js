import Image from "next/image";
import React, { useState } from "react";
import playerThumbnil from "../../public/images/player-thumbnil.webp";

function VideoPlayer() {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <Image src={playerThumbnil} alt="" />
      <button
        onClick={() => setPlay(true)}
        className={`play-btn absolute inset-0 z-[1] flex items-center justify-center  duration-500 ${
          play ? "hidden" : null
        }`}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 494.148 494.148"
          style={{ enableBackground: "new 0 0 494.148 494.148" }}
          xmlSpace="preserve"
          className="relative z-[1] h-[30px] w-[30px]"
        >
          <path
            fill="#fff"
            d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124 c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884 C432.632,229.572,422.964,213.288,405.284,201.188z"
          />
        </svg>
      </button>
      {play ? (
        <div className="absolute inset-0 z-[5]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
            allowscriptaccess="always"
            allow="autoplay"
            allowfullscreen=""
          ></iframe>
        </div>
      ) : null}
    </div>
  );
}

export default VideoPlayer;
