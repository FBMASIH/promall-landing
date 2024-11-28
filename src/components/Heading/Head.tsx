"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoComponents from "./Logo/LogoComponents";
import CustomScrollbar from "./scroll/CustomScroll";
import Navbar from "./Nav/Navbar";
import NavRight from "./Nav/Nav-Right";
import HeadContent from "./HeadContent/HeadContent";

export default function Head() {
  const [isMoved, setIsMoved] = useState(false); // first animation (+logo)
  const [screenFull, setScreenFull] = useState(false);
  console.log(screenFull)

  const handleScreenFull = (): void => {
    setScreenFull(!screenFull);
  };

  //timer animate logo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoved(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isMoved]);
  return (
    <div className="flex justify-center items-center overflow-x-hidden ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        className={`bg-[#000000B2] absolute backdrop-blur-sm mx-auto  ${
          screenFull ? "w-[100%] h-[100%] m-0 rounded-sm" : " w-[94%] h-[94%]"
        } rounded-2xl transition-all duration-300 ease-in  shadow-head`}
      >
        {/* Nav top  */}
        <div className={`flex justify-between    `}>
          <LogoComponents isMoved={isMoved} />
          <Navbar />
          <NavRight handleScreenFull={handleScreenFull} screenFull={screenFull} />
        </div>
        {/* content head  */}
        <div>
          <HeadContent />
        </div>
      </motion.div>
      <CustomScrollbar />
    </div>
  );
}
