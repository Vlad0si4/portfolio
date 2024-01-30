import Image from "next/image";
import { Socials } from "@/constans";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed top-0 p-4 bg-transparent z-[20] w-full flex items-center flex-col sm:flex-row gap-5 sm:justify-between sm:px-14">
      <h1 className="text-white text-4xl md:text-6xl">
        Vladislav<span className="font-thin"> Boiko</span>
        <span className="text-red-500">.</span>
      </h1>

      <div className="flex flex-row gap-5 justify-center">
        {Socials.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={social.src} alt={social.name} width={26} height={26} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
