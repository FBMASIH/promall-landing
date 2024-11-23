import React from "react";
import { PiArrowsOutSimpleBold } from "react-icons/pi";
import { PiArrowsInSimpleBold } from "react-icons/pi";
interface MyComponentProps {
  handleScreenFull: () => void; // تابع برای تبدیل حالت تمام صفحه
  screenFull: boolean;
}
export default function ZoomController({
  handleScreenFull,
  screenFull,
}: MyComponentProps) {
  return (
    <div
      className="bg-[#000000B2] w-8 h-8 lg:w-9 lg:h-9 rounded-full flex justify-center items-center cursor-pointer"
      onClick={handleScreenFull}
    >
      {screenFull === true ? (
        <PiArrowsInSimpleBold color="white" className="w-5 h-5" />
      ) : (
        <PiArrowsOutSimpleBold color="white" className="w-5 h-5" />
      )}
    </div>
  );
}
