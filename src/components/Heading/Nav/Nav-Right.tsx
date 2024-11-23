import React from "react";
import { motion } from "framer-motion";
import ZoomController from "@/components/ui/Nav-Right/ZoomController ";
import UserNav from "@/components/ui/Nav-Right/UserNav";
import { ThemeSwitcher } from "@/components/ui/Nav-Right/ThemeSwitcher";

interface MyComponentProps {
  handleScreenFull: () => void; //  تابع برای تبدیل حالت تمام صفحه و کوچک کردن
  screenFull: boolean
}

export default function NavRight({ handleScreenFull , screenFull }: MyComponentProps) {
  return (
    <motion.div
      initial={{ x: 0, y: -100 }}
      animate={{ x: -20, y: 8 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
      className="flex justify-between  gap-x-1 items-center "
    >
      <div className="big">
        <ZoomController handleScreenFull={handleScreenFull} screenFull={screenFull} />
      </div>
      <div className="theme">
        <ThemeSwitcher />
      </div>
      <div className="user">
        <UserNav />
      </div>
    </motion.div>
  );
}
