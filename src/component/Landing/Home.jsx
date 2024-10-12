import React, { useRef } from "react";
import NavBar from "../Navbar/NavBar";
import CenterText from "../Hero/CenterText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Black from "../Loading/Black";

const Home = () => {
  const pageref = useRef(null);

  useGSAP(() => {
    gsap.from(pageref.current, {
      opacity: 0,
      delay: 1.8,
      duration: 1,
      y: 50,
      scale: 1.05,
    });
  });
  return (
    <div className="h-screen">
      <Black />
      <div
        ref={pageref}
        className="h-screen   w-full bg-cover bg-center  bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] "
      >
        <NavBar />
        <CenterText />
      </div>
    </div>
  );
};

export default Home;
