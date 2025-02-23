"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { clsx } from "clsx";

const Navbar = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleBlur = () => {
      setBlur(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleBlur);

    return () => {
      window.removeEventListener("scroll", handleBlur);
    };
  }, []);

  return (
    <div
      className={clsx("px-4 py-2 flex items-center justify-between w-full", {
        "absolute top-0 z-10 ": !blur,
        "fixed z-10 backdrop-blur ": blur,
      })}
    >
      <div className="relative w-40 h-16">
        <Image src={"/images/WaveBeat.svg"} alt="WaveBeat" fill />
      </div>

      {/* mobile menu */}
      {/* hamburger */}
      <button onClick={() => setIsOpenBurger((prev) => !prev)} className="w-6 h-6 space-y-1 mb-2 md:hidden">
        <div
          className={clsx("w-full  h-1 bg-primary-gradient rounded-2xl  transition-all duration-300 origin-top-left", {
            "rotate-45 ": isOpenBurger,
          })}
        ></div>
        <div
          className={clsx(" w-full h-1 bg-primary-gradient rounded-2xl  transition-all duration-300 tranform origin-center", {
            "scale-0": isOpenBurger,
          })}
        ></div>
        <div
          className={clsx(" w-full h-1 bg-primary-gradient rounded-2xl  transition-all duration-300 origin-bottom-left", {
            "-rotate-45": isOpenBurger,
          })}
        ></div>
      </button>
      {/* close hamburger */}

      {/* bar */}
      <div className={clsx("absolute right-2 top-14 bg-white shadow-md rounded px-6 py-4 flex flex-col space-y-6 transition-all duration-500 md:hidden",{
        "translate-x-[200px]" : !isOpenBurger
      })}>
        <a href={"#home"} className="transition-all duration-500 hover:text-purple-300">
          Home
        </a>
        <a href={"#features"} className="transition-all duration-500 hover:text-purple-300">
          Feature
        </a>
        <a href={"#feedback"} className="transition-all duration-500 hover:text-purple-300">
          Feedback
        </a>
        <a href={"#pricing"} className="transition-all duration-500 hover:text-purple-300">
          Pricing
        </a>
      </div>
      {/* close mobile menu */}

      {/* dekstop menu */}
      <div className="hidden md:flex items-center gap-20">
        <div className="flex items-center gap-6">
          <a href={"#home"} className="transition-all duration-500 hover:text-purple-300">
            Home
          </a>
          <a href={"#features"} className="transition-all duration-500 hover:text-purple-300">
            Feature
          </a>
          <a href={"#feedback"} className="transition-all duration-500 hover:text-purple-300">
            Feedback
          </a>
          <a href={"#pricing"} className="transition-all duration-500 hover:text-purple-300">
            Pricing
          </a>
        </div>
        <Button type="gradient">Get Apps</Button>
      </div>
      {/* close dekstop menu */}
    </div>
  );
};

export default Navbar;
