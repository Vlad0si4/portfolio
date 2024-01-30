import Link from "next/link";

const DownloadButton = () => {
  return (
    <div>
      <a download="/public/assets/Boiko_Vlad_Frontend_Developer.pdf">
        <button className="text-white"> Download CV</button>
      </a>
    </div>
  );
};

export default DownloadButton;
