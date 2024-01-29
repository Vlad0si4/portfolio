"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { ProImages, ProImages2, ServiceData } from "@/constans";
import Image from "next/image";

const ServiceSlider = () => {
  return (
    <div className="w-[85%] md:w-[65%] lg:w-[55%]">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={true}
        loop={true}
        modules={[FreeMode, Pagination]}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className=" cursor-pointer mb-14 group relative text-white shadow-lg rounded-xl px-6 py-8 overflow-hidden flex items-center h-[200px] w-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 " />
              <div className=" relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
