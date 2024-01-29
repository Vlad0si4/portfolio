import ServiceSlider from "@/components/ServiceSlider";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-5 h-screen bg-[#0C011A] px-8 overflow-hidden ">
      <div className="flex flex-col items-center gap-3 mt-20 sm:mt-0">
        <h1 className="text-[50px] text-white font-semibold">
          My skills<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-grey-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          ex iure placeat deserunt excepturi aliquid consequuntur amet commodi
          repudiandae necessitatibus!
        </p>
      </div>
      <ServiceSlider />

      {/* <div className="pl-20 sm:pl-60 flex flex-col gap-3 pb-60 sm:pb-0">
        <h1 className="text-[50px] text-white font-semibold">
          My Skills<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[350px] text-[16px] text-gray-200 md:text-grey-400">
          Lorem ipsum,
        </p>
        
      </div> */}

      <div className="absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75">
        <Image
          src="/assets/bulb.png"
          alt="bulb"
          width={260}
          height={260}
          className="w-full h-full hidden md:block"
        />
      </div>
    </div>
  );
};

export default AboutMe;
