import ProjectSlider from "@/components/ProjectSlider";

const MyProjects = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center gap-5 h-screen bg-[#0C011A] px-8">
      <div className="flex flex-col gap-3 items-center pt-[120px] sm:pt-0">
        <h1 className="text-[50px] text-white font-semibold">
          My works<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-grey-400 pb-5 sm:pb-0">
          Here you can see my completed projects, implemented using an approach
          that employs various technologies. I created these projects using
          modern tools and programming languages, paying special attention to
          details and efficiency. Please take a look at my projects and feel
          free to reach out for additional information.
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default MyProjects;
