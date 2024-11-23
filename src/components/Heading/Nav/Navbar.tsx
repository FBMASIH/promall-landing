import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
// import {Tabs, Tab} from "@nextui-org/tabs";

export default function Navbar() {
  const [isActive, setIsActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  console.log(menuRef);

  const navItems = [
    { name: "ارتباط با ما ", href: "#we" },
    { name: "همکاری", href: "#hamkari" },
    { name: "پرومال", href: "#promall" },
    { name: "قصه پرومال", href: "#story" },
    { name: "اپلیکیشن", href: "#app" },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsActive("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <motion.div
      ref={menuRef}
      className="backdrop-blur-sm p-2 flex justify-center items-center  rounded-2xl  md:h-8 lg:h-11  "
      initial={{ x: 0, y: -80 }}
      animate={{ x: 1, y: 8 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
    >
      <motion.ul className="flex justify-between items-center text-white lg:mx-2 md:mx-0 bg-transparent">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileTap={{ scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`lg:mx-3 md:mx-2 py-1 px-2 text-[12px] lg:text-[18px]   ${
              item.name == isActive
                ? " bg-[#202426CF]  text-[#AED4FC] rounded-xl shadow-[0px_8px_10px_-5px_#AED4FC54] "
                : "hover:text-gray-400"
            }`}
            onClick={() => {
              setIsActive(item.name);
            }}
          >
            <a href={item.href}>{item.name}</a>
          </motion.li>
        ))}

        <motion.li className="lg:mx-4 md:mx-2 md:text-[12px]  lg:text-lg ">
          <IoSearch />
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

// box-shadow: 0px 4px 5.7px 0px #00000069;
// box-shadow: 0px 0px 24.5px 0px #AED4FC12;
// background: #202426CF;

// box-shadow: ;

// box-shadow: 0px 20px 25px -18px #AED4FC33;
// box-shadow: 0px 8px 10px -5px #AED4FC54;
