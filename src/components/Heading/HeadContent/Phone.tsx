import React from "react";
import { TbAntennaBars5 } from "react-icons/tb";
import { HiBattery100 } from "react-icons/hi2";
import { IoIosWifi } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import profile from "../../../../public/assets/porfile.png";
import Image from "next/image";
import { TbPlayerPlay } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa6";
function Phone() {
  // Convert numbers to Farsi
  function toPersianNumbers(num: number): string {
    return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  }
  return (
    <div className="z-40 mt-6 w-[265px] absolute right-2">
      <section className="flex  justify-evenly gap-x-20 items-center  text-white">
        <div className="">9:41</div>
        <div className="flex flex-row gap-x-0.5">
          <TbAntennaBars5 />
          <IoIosWifi />
          <HiBattery100 className="" />
        </div>
      </section>
      <div className="head flex justify-evenly items-center gap-x-12 mt-4">
        <div className="head-left flex items-center">
          <IoMdMenu color="white" size={28} />
          <IoMoonOutline color="white" size={18} />
        </div>
        <div className="head-right flex justify-center items-center gap-x-1 ">
          <div className="text-[12px]  text-white text-center">
            {" "}
            (: خوش اومدی سحر
          </div>
          <div className="w-8 h-8 flex justify-center items-center ">
            <Image
              src={profile}
              alt="profile-img"
              className="w-full h-full rounded-full bg-contain"
            />
          </div>
        </div>
      </div>
      <section className="dashboard mt-3 ">
        <h2 className="text-white text-right mr-8 ">داشبورد کاربری</h2>
        <div className="flex  justify-center gap-2 mt-4">
          <div className="w-28 h-28 bg-dashboard rounded-xl  flex flex-col gap-y-1  justify-center items-center shadow-[0px_4px_7px_0px_#00000082]">
            <FaArrowDown color="white " size={35} className="font-semibold" />
            <h2 className="text-white text-lg font-semibold ">
              {toPersianNumbers(20)}
            </h2>
            <h2 className="text-white text-[12px]"> سفارشات ثبت شده</h2>
          </div>
          <div className="w-28 h-28 bg-dashboard rounded-xl flex flex-col gap-y-1 justify-center items-center shadow-[0px_4px_7px_0px_#00000082] ">
            <TbPlayerPlay color="white " size={35} className="font-semibold" />
            <h2 className="text-white text-lg font-semibold ">
              {toPersianNumbers(5)}
            </h2>
            <h2 className="text-white text-[12px]">سفارش جاری</h2>
          </div>
        </div>
      </section>
      <section className="mt-4  flex flex-col justify-end items-end  mr-4 w-[95%]  overflow-hidden " dir="lte">
        <h3 className="text-white text-right">وضعیت آخرین سفارشتون</h3>
      <div  className="relative flex justify-between gap-x-4  ">
      <div className=" right-1 order w-[220px] h-40 bg-dashboard rounded-xl mt-5  shadow-[0px_4px_7px_0px_#00000082] ">
          <div className="flex justify-around items-center mt-2   " >
          <div className="flex flex-col  text-[12px] text-[#AED4FC] ">
              <span>#ORD2023234</span>
              <span>خروج از مرکز پست</span>
            </div>
            <div className="flex flex-col justify-start items-end text-[12px] text-white">
              <span> :شماره سفارش</span>
              <span>:وضعیت</span>
            </div>
            
          </div>
          <div className="w-[97%]  h-[0.3px] mt-4 bg-[#777373] mx-auto" ></div>
          <div>
            <div className="img-one flex  justify-around items-center text-center " >
                <Image  src="/assets/shose1.png"  alt="img-dashboard" width={60} height={10}/>
                <Image  src="/assets/rolex.png"  alt="img-dashboard" width={50} height={10}/>
                <Image  src="/assets/shose2.png"  alt="img-dashboard" width={60} height={10} className="bg-contain" />
               
            </div>
            <div className="flex justify-around items-center" >
            <div className="w-4 h-4 rounded-full bg-[#AED4FC] text-black flex justify-center items-center text-center " ><span className="text-center  font-semibold mt-1">1</span></div>
            <div className="w-4 h-4 rounded-full bg-[#AED4FC] text-black flex justify-center items-center text-center " ><span className="text-center  font-semibold mt-1">2</span></div>
            <div className="w-4 h-4 rounded-full bg-[#AED4FC] text-black flex justify-center items-center text-center " ><span className="text-center  font-semibold mt-1">1</span></div>
            </div>
            <div>
            </div>
            <div>

            </div>
          </div>
        </div>
         <div className=" left-[-170]  order w-[220px] h-40 bg-dashboard rounded-xl mt-5  shadow-[0px_4px_7px_0px_#00000082] ">
          <div className="flex justify-around items-center mt-2   " >
          <div className="flex flex-col  text-[12px] text-[#AED4FC] ">
              <span>#ORD2023234</span>
              <span>خروج از مرکز پست</span>
            </div>
            <div className="flex flex-col justify-start items-end text-[12px] text-white">
              <span> :شماره سفارش</span>
              <span>:وضعیت</span>
            </div>
            
          </div>
          <div className="w-[97%]  h-[0.3px] mt-4 bg-[#777373] mx-auto" ></div>
          <div>
            <div className="img-one flex  justify-around items-center text-center " >
                <Image  src="/assets/shose1.png"  alt="img-dashboard" width={60} height={10}/>
                <Image  src="/assets/rolex.png"  alt="img-dashboard" width={50} height={10}/>
                <Image  src="/assets/shose2.png"  alt="img-dashboard" width={60} height={10} className="bg-contain" />
               
            </div>
            <div className="flex justify-around items-center" >
            <div className="w-4 h-4 rounded-full bg-[#AED4FC] text-black flex justify-center items-center text-center " ><span className="text-center  font-semibold mt-1">1</span></div>
            <div className="w-4 h-4 rounded-full bg-[#AED4FC] text-black flex justify-center items-center text-center " ><span className="text-center  font-semibold mt-1">2</span></div>
            <div className="w-4 h-4 rounded-full bg-[#AED4FC] text-black flex justify-center items-center text-center " ><span className="text-center  font-semibold mt-1">1</span></div>
            </div>
            <div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Phone;
