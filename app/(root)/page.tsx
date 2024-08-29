"use client";

import { useState, useEffect } from "react";
import { videos } from "@/lib/constants"; // Assuming videos is an array of video objects
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Check if the visitor has a unique ID in localStorage
    const visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      // If no visitor ID, generate one and store it
      const newVisitorId = `visitor-${new Date().getTime()}`;
      localStorage.setItem("visitorId", newVisitorId);

      // Increment the visitor count
      setVisitorCount((prevCount) => {
        const newCount = prevCount + 1;

        // Store the updated visitor count in localStorage
        localStorage.setItem("visitorCount", JSON.stringify(newCount));

        return newCount;
      });
    } else {
      // If visitor ID exists, load the visitor count from localStorage
      const storedVisitorCount = JSON.parse(localStorage.getItem("visitorCount") || "0");
      setVisitorCount(storedVisitorCount);
    }
  }, []);

  const handlePlayClick = (index: number) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [index]: true,
    }));

    const videoElement = document.querySelector(`video[data-index="${index}"]`) as HTMLVideoElement | null;;
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
            className="object-cover w-[90px] h-[90px] cursor-pointer"
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
              data-index={index}
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
            className="object-cover w-[90px] h-[90px] cursor-pointer"
          />
        </Link>
      </div>
    </main>
  );
}
