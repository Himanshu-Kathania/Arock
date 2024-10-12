import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Black = () => {
  const Blackref = useRef(null);

  useGSAP(() => {
    gsap.to(Blackref.current, {
      y: "-100%",
      delay: 1.9,
      duration: 0.5,
    });
  });
  return (
    <div ref={Blackref} className="h-screen w-full bg-[#111] z-10 fixed"></div>
  );
};

export default Black;
