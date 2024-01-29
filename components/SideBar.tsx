"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constans";
import Link from "next/link";
import Transition from "./Transition";

const SideBar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [prevPath, setPrevPath] = useState("/");

  const path = usePathname();

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div className="fixed top-[130px] right-14 z-[30] h-[48px] w-[200px] rounded-full bg-gray-500 bg-opacity-50 sm:right-10 sm:top-[40%] sm:h-[200px] sm:w-[48px]">
      {isRouting && <Transition />}
      <AnimatePresence mode="wait">
        <div className="flex flex-row sm:flex-col gap-5 justify-center items-center h-full">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setIsActive(link.name)}
            >
              <link.icon
                className={`w-[28px] h-[28px] hover:text-orange-500 ${
                  isActive === link.name ? "text-orange-500" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
