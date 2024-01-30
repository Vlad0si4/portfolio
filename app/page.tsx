"use client";

import NavBar from "@/components/NavBar";
import Particle from "@/components/Particle";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex items-center min-h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-0 top-0 h-screen w-[80%] z-[2]">
        <Particle />
      </div>

      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />

      <div className=" flex flex-col gap-3 z-[10] m-3 pt-[180px] sm:pl-40 sm:pt-20 ">
        <h1 className="text-[50px] text-white max-w-[500px]  ">
          I am Junior{" "}
          <span className="text-red-500 h-[150px]">
            <TypeAnimation
              sequence={["Front-End", 1000, "Front-End Developer.", 4500]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          I am an experienced and passionate Front-End developer. I have
          experience in developing my own business, where I realized that
          communication, discipline, and teamwork are the keys to success. I am
          looking for opportunities to grow and collaborate with experienced
          professionals.
        </p>
        <div className="relative w-[80px] sm:w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={140}
            height={140}
            className="slow-spin"
          />
        </div>
        <div className="absolute right-5 sm:right-40  bottom-0 z-[50]">
          <Image
            src="/assets/photo.png"
            alt="MoustacheMan"
            width={420}
            height={420}
            className="w-[200px] h-[200px] z-[1] sm:h-[420px] sm:w-[420px]"
          />
        </div>
      </div>
    </main>
  );
}
