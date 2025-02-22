"use client";
import Button from "@/components/Button";
import { redirect } from "next/navigation";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="relative flex flex-col justify-center items-center text-center">
        <div className="absolute -z-1 w-64 h-64 bg-[#BC6AFF] opacity-40  rounded blur-3xl"></div>
        <h1 style={{ textShadow: "2px 2px 4px rgba(0,0,0,1);" }} className="text-3xl  font-extrabold md:text-8xl">
          404
        </h1>
        <div className="py-4">
          <h2 className="text-2xl font-bold ">Looks Like You’re Lost</h2>
          <p className="opacity-60">We can’t seem to find pages you’re looking for</p>
        </div>
        <div>
          <Button type="gradient" onclick={() => redirect("/")}>
            Back To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
