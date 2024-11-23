"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LogoB from "../../../../public/assets/logo/logo-b.png";
import Logo from "../../../../public/assets/logo/logo.png";

interface MyComponentProps {
  isMoved: boolean;
}

export default function LogoComponents({ isMoved }: MyComponentProps) {
  // Responsive logo initial position
  const getResponsivePositionFirst = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      return { x: "44vw", y: "44vh" }; // دسکتاپ
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      return { x: "40vw", y: "40vh" }; // تبلت
    } else {
      return { x: "35vw", y: "35vh" }; // موبایل
    }
  };
  // final position of Responsive Logo
  const getResponsivePosition = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      return { x: "1vw", y: "2vh" }; // دسکتاپ
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      return { x: "2vw", y: "1vh" }; // تبلت
    } else {
      return { x: "2vw", y: "1vh" }; // موبایل
    }
  };

  const [positionFirst, setPositionFirst] = useState(
    getResponsivePositionFirst()
  );
  const [position, setPosition] = useState(getResponsivePosition());
  // Update based on position
  useEffect(() => {
    const updatePosition = () => setPosition(getResponsivePosition());
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);
  //
  useEffect(() => {
    const updatePosition = () => setPositionFirst(getResponsivePositionFirst());
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);
  return (
    <motion.div
      initial={positionFirst}
      animate={isMoved ? position : positionFirst}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="logo   "
    >
      <Link
        href="/"
        className={`gap-x-2`}
        style={{
          display: "flex",
          flexDirection: `${isMoved ? "row" : "column"}`,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={LogoB}
          alt="لوگو پرومال"
          className={`block dark:hidden ${isMoved ? "w-8 lg:w-14" : "w-24"}`}
        />
        <Image
          src={Logo}
          alt="لوگو پرومال"
          className={`hidden dark:block ${isMoved ? "w-8 lg:w-14" : "w-24"}`}
        />
        <div
          className={` font-bold  mt-1 ${
            isMoved ? "text-lg lg:text-2xl" : "text-4xl"
          }`}
        >
          <span className=" text-[#aed4fc]">Pro</span>
          <span className=" text-white">Mall</span>
        </div>
      </Link>
    </motion.div>
  );
}
