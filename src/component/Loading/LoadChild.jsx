import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LoadChild = () => {
  const lineref = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(lineref.current, {
      width: "100%",
      delay: 0.7,
      duration: 1.3,
      ease: "expo.out",
    }).to(lineref.current, {
      opacity: 0,
    });
  });

  return <div ref={lineref} className="w-0 h-full bg-white rounded"></div>;
};

export default LoadChild;
