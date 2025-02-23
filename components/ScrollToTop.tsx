"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isScroll, setIsScroll] = useState(false)
  const toTop = () => {
    window.scrollTo({top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleBtn = () => {
      return setIsScroll(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleBtn)
    console.log("tes");
    
    return () => {
      window.removeEventListener("scroll", handleBtn)
    }
  }, [])
  

  return (
    <>
      {isScroll && (
        <button onClick={toTop} className="fixed z-50 bottom-5 right-5 p-2 rounded-full bg-secondary-gradient active:scale-95">
          <ChevronUp size={24} color="white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
