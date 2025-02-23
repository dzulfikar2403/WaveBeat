"use client"
import { clsx } from "clsx";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type: "gradient" | "purple" | "light";
  onclick?: VoidFunction
};

const Button = ({ children, type, onclick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className={clsx({
        "px-6 py-2 opacity-55 bg-primary-gradient text-white font-bold rounded-3xl active:scale-95 ": type === "gradient",
        "px-6 py-2 bg-[#BC6AFF] text-white text-sm font-semibold rounded-3xl transition-all duration-500 active:scale-95 hover:bg-opacity-70": type === "purple",
        "px-6 py-2 bg-transparent border border-black  text-black text-sm font-semibold rounded-3xl transition-all duration-500 active:scale-95 hover:bg-black hover:text-white": type === "light",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
