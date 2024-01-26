import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/photo.png"
          alt="MoustacheMan"
          width={320}
          height={320}
          className="w-[280px] h-[280px] z-[1] sm:h-[320px] sm:w-[320px]"
        />
      </div>
      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />

      <div className=" flex flex-col gap-3 z-[10] p-3 sm:pl-40 sm:pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Transform ideas into
          <span className="text-red-500">Digital Reality</span>
        </h1>

        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          perferendis quidem natus iste unde earum doloremque, sapiente ipsa nam
          incidunt!
        </p>

        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
