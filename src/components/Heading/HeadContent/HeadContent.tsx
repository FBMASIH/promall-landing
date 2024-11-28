import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import Phone from "./Phone";

function HeadContent() {
  const slideVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };
  return (
    <div className="grid grid-cols-3 absolute top-20  gap-x-14">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        className=" col-span-1 ml-20    bg-phone w-[260px] h-[490px] background-image  rounded-t-3xl  relative flex justify-center items-center "
      >
        <div
          className="w-72 h-[500px] absolute  bg-cover  mt-[-10px]"
          style={{ backgroundImage: `url(/iphone.png)` }}
        >
          <Phone />
        </div>
      </motion.div>
      <div className="right-content col-span-2  text-white text-center flex flex-col justify-normal items-center gap-1 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 4 }}
        >
          <div className="text-white text-4xl font-semibold ">
            ... فقط یک اپلیکیشن نیست <br />. قراره{" "}
            <span className="text-[#aed4fc]"> دوستت</span> بشه
          </div>
          <div className="text-white/20 text-xs leading-5 mt-2">
            ما اینجا نیستیم که فقط خدمات ارائه بدیم،اومدیم تا همراهت باشیم، تو
            هر لحظه
            <br />
            اپلیکیشنی که فراتر از یک ابزار ساده‌ست
          </div>
        </motion.div>
        <motion.a
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 0.9, ease: "easeOut", delay: 4 }}
          href=""
          download
          className="backdrop-blur-sm w-36 h-12 rounded-lg flex justify-around items-center p-2 mt-6 gap-1 "
        >
          <span>
            <HiOutlineDownload size={20} className="text-[#aed4fc]" />
          </span>
          <span>وب اپلیکیشن</span>
        </motion.a>
      </div>
    </div>
  );
}

export default HeadContent;

background:;

