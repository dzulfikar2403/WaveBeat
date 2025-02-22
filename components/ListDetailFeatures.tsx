import Image from "next/image";
import React from "react";

const ListDetailFeatures = () => {
  return (
    <div className="space-y-4">
      {/* music */}
      <div className="flex gap-2 items-start">
        <div className="relative w-6 h-6 md:w-10 md:h-10 rounded bg-purple-400">
          <Image src={"/images/music-beat-ico.svg"} alt="women hero" fill className="p-2" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Millions of Songs & Albums</h3>
          <p>
            Discover global hits and indie <br /> gems anytime.
          </p>
        </div>
      </div>
      {/* trending */}
      <div className="flex gap-2 items-start">
        <div className="relative w-6 h-6 md:w-10 md:h-10 rounded bg-blue-400">
          <Image src={"/images/fire-ico.svg"} alt="women hero" fill className="p-2" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Trending & Viral Music</h3>
          <p>
          Stay updated with the latest hot <br /> tracks.
          </p>
        </div>
      </div>
      {/* personalized */}
      <div className="flex gap-2 items-start">
        <div className="relative w-6 h-6 md:w-10 md:h-10 rounded bg-pink-300">
          <Image src={"/images/music-note-ico.svg"} alt="women hero" fill className="p-2" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Personalized Soundtracks</h3>
          <p>
          AI-powered playlists for your <br /> mood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListDetailFeatures;
