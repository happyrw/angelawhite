"use client";

import { useState, useRef } from "react";
import { videos } from "@/lib/constants";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlayClick = (index: number) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [index]: true,
    }));

    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.play();
      videoElement.muted = false;
    }
  };

  return (
    <main className="flex items-start gap-4 my-5 p-5 pl-5 lg:p-0">
      <div className="top-0 sticky w-32 h-screen flex-grow hidden lg:flex items-end justify-center">
        <Link href="https://twitter.com/ANGELAWHITE">
          <Image
            src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
            alt="twitter"
            width={90}
            height={90}
            className='object-cover w-[90px] h-[90px] cursor-pointer'
          />
        </Link>
      </div>
      <div className="flex flex-col gap-10 w-full lg:w-[800px]">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative bg-black/15 rounded-xl overflow-hidden h-fit lg:h-[30em] flex flex-col items-center"
          >
            {!playingVideos[index] && (
              <button
                className="absolute top-[40%] bg-sky-700 p-3 rounded-full z-10"
                onClick={() => handlePlayClick(index)}
              >
                <Play className="w-[70px] h-[70px]" />
              </button>
            )}
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={video.src}
              className="w-fit h-full object-contain"
              autoPlay={playingVideos[index]}
              muted={playingVideos[index]}
              controls={playingVideos[index]}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <div className="top-0 sticky w-32 h-screen items-center justify-center flex-grow hidden lg:flex">
        <Link href="https://www.instagram.com/theangelawhite/?hl=en">
          <Image
            src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
            alt="instagram"
            width={90}
            height={90}
            className='object-cover w-[90px] h-[90px] cursor-pointer'
          />
        </Link>
      </div>
    </main>
  );
}
