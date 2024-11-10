"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from "../../../public/assets/landing/landing1.png";
import Image from "next/image";
export default function Landing() {
  const images = [img1, img1, img1];
  return (
    <>
      <div className=" min-h-screen  relative overflow-x-hidden text-center">
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {images?.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                width={500}
                height={300}
                src={img}
                alt="img-landing"
                className="object-cover w-full h-full md:h-[56vh] lg:h-[95vh] "
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <section className="flex justify-center items-center">
          <div className=" bg-[#000000B2] backdrop-blur-sm    rounded-xl  h-[27%]   md:h-[52%]  lg:h-[90%]  overflow-hidden   z-50 absolute top-5 shadow-[0px_4px_26px_14px_#00000087] mx-auto  max-w-[95%]   w-full overflow-x-hidden ">
            <div className="flex mr-2 mt-2 gap-1  ">
              <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#52BB21]"></div>
              <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full  bg-[#D4CE03] "></div>
              <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full  bg-[#9F2828]"></div>
            </div>
            <div className="  flex flex-col h-[95%]  justify-between items-center  p-1  ">
              <div className=" flex flex-col leading-5  font-semibold text-xl md:text-3xl md:leading-7 lg:text-4xl lg:leading-7">
                <span className=" text-[#AED4FC] ">
                  Pro<span className=" text-[#FFFFFF]">Mall</span>
                </span>
                <span className=" text-[#AED4FC] ">
                  پرو<span className=" text-[#FFFFFF]">مال</span>
                </span>
              </div>
              <div className="flex flex-col  font-semibold md:text-2xl lg:text-3xl text-[#FFFFFF] ">
                <span>فقط یه اپلیکیشن نیست ... </span>
                <span>
                  {" "}
                  قراره <span className="text-[#AED4FC]">دوستت</span> بشه :)
                </span>
              </div>
              <div className="w-12 h-4 md:w-16 md:h-6 lg:w-24 lg:h-8 bg-black/100 rounded-xl flex justify-around items-center mb-3">
                <a
                  href="https://t.me/YourTelegramUsername"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="text-[#219ebc] w-3  md:w-5 md:h-5 lg:w-7 lg:h-7" />
                </a>
                <a
                  href="https://www.instagram.com/YourInstagramUsername"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[#f94144] w-3 md:w-5 md:h-5 lg:w-7 lg:h-7" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
