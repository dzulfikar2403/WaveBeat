"use client"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

const CardFeedback = () => {
  return (
    // {/* card feedback */}
    <div className="rounded shadow-lg px-8 py-2 min-w-[16rem] my-4">
      <div className="text-black ">
        <Quote size={22} color="black" className="rotate-180 fill-current" />
      </div>
      <p className="italic text-sm py-4">Feels like a live concert in my ears! The sound quality is incredible, and I love how the app enhances every beat and melody</p>
      <div className="flex gap-2 items-center">
        <div className="bg-rose-200 rounded-full w-10 h-10"></div>
        <div>
          <p className="font-semibold">John Doe</p>
          <span className="flex gap-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="relative w-4 h-4">
                <Image src={"/images/star-ico.svg"} alt={i.toString()} fill />
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

const SliderFeedback = () => {
  const refSlider = useRef<HTMLDivElement | null>(null);

  const prev = () => refSlider.current && refSlider.current.scrollBy({left: -200,behavior: "smooth"})
  const next = () => refSlider.current && refSlider.current.scrollBy({left: 200,behavior: "smooth"})

  return (
    <div className="w-full">
      <div className="flex justify-end px-4 ">
        <div className="flex gap-4">
          <button onClick={prev} className="group text-black flex items-center gap-2 hover:text-white">
            <ArrowLeft size={32} className="fill-current p-1 border-2 font-bold border-black group-hover:bg-black rounded-full" />
          </button>
          <button onClick={next} className="group text-black flex items-center gap-2 hover:text-white">
            <ArrowRight size={32} className="fill-current p-1 border-2 font-bold border-black group-hover:bg-black rounded-full" />
          </button>
        </div>
      </div>
      {/* slider */}
      <div ref={refSlider} className="w-full overflow-x-scroll space-x-4 scroll-smooth flex hide-scrollbar ">
        {Array.from({length:10}).map((_,i) => {
          
          return (
            <CardFeedback key={i} />
          )
        })}
      </div>
    </div>
  );
};

export default SliderFeedback;
