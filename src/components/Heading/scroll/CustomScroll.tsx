"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ x: 40, y: 0 }}
      animate={{ x: -5, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 4 }}
      id="custom-scrollbar"
      style={{
        position: "fixed",
        right: "10px",
        top: "35%",
        width: "6px",
        height: "33%",
        background: "#ffff",
        borderRadius: "4px",
      }}
    >
      <div
        id="scroll-thumb"
        style={{
          width: "100%",
          height: "100px",
          background: "#888",
          borderRadius: "4px",
          transform: `translateY(${scrollPosition * 100}%)`,
          transition: "transform 0.2s ease",
        }}
      ></div>
    </motion.div>
  );
};

export default CustomScrollbar;
