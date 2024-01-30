"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { ProImages } from "@/constans";
import Image from "next/image";
import Link from "next/link";

const ProjectSlider = () => {
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
        modules={[FreeMode, Pagination]}
        loop={true}
      >
        {ProImages.map((item) => (
          <SwiperSlide key={item.src} className="mb-14 px-3">
            <div className="flex justify-center">
              <Link href={item.url} rel="noopener noreferrer" target="_blank">
                <div className="flex flex-row gap-3 relative group items-center  h-[200px] w-[200px] ">
                  <Image
                    src={item.src}
                    alt="project image"
                    width={280}
                    height={280}
                    className="rounded-md h-full w-full object-cover"
                  />

                  <div
                    className="cursor-pointer  transition-opacity duration-200 rounded-md absolute inset-0
                bg-black opacity-0 group-hover:opacity-50"
                  />
                  <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white sm:text-lg">
                    View project
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-2"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;

//  absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-800
// to-purple-800 opacity-0 group-hover:opacity-70
