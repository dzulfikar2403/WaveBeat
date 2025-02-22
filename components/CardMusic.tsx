import { MusicDataType } from "@/lib/data";
import Image from "next/image";
import React from "react";

const CardMusic = ({data}: {data:MusicDataType}) => {
  return (
    <div className="flex gap-2 p-2 bg-white overflow-hidden rounded-lg shadow-md">
      <div className="relative w-20 h-20 rounded-md overflow-hidden">
        <Image src={data.image_url} alt="music" fill className="object-cover" />
      </div>
      <div className="relative w-32 flex flex-col">
        <h3 className="text-sm line-clamp-1 whitespace-nowrap font-bold">{data.song}</h3>
        <small className="text-xs">by {data.artist}</small>
        <div className="absolute w-full bottom-0 flex justify-between items-center">
          <small>
            <strong>{data.duration}</strong>
          </small>
          <div className="relative w-8 h-8 bg-white rounded-full">
            <Image src={"/images/play.svg"} alt="music-play-btn" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMusic;
