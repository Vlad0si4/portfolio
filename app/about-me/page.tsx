import ServiceSlider from "@/components/ServiceSlider";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-5 h-screen bg-[#0C011A] px-8 overflow-hidden ">
      <div className="flex flex-col items-center gap-3 pt-[120px] sm:pt-0">
        <h1 className="text-[50px] text-white font-semibold">
          My skills<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-grey-400 pb-5 sm:pb-0">
          I am well-versed in technologies like HTML, CSS, JavaScript, React,
          Next.js, Vue.js and TypeScript. Every day, I diligently work on
          improving my knowledge and skills. I am ready to take on new
          challenges and apply my skills to create high-quality web
          applications.
        </p>
      </div>
      <ServiceSlider />

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
