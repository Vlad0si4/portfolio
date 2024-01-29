import ProjectSlider from "@/components/ProjectSlider";

const MyProjects = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center gap-5 h-screen bg-[#0C011A] px-8">
      <div className="flex flex-col gap-3 items-center mt-20 sm:mt-0">
        <h1 className="text-[50px] text-white font-semibold">
          My works<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-grey-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          ex iure placeat deserunt excepturi aliquid consequuntur amet commodi
          repudiandae necessitatibus!
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default MyProjects;
