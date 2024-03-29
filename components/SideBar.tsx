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
    <div className="flex items-center justify-center">
      <div className="fixed top-[140px] sm:top-[80px] z-[30] h-[48px] w-[200px] rounded-full bg-gray-500 bg-opacity-50 md:right-10 md:top-[40%] md:h-[200px] md:w-[48px] flex items-center justify-center">
        {isRouting && <Transition />}
        <AnimatePresence mode="wait">
          <div className="flex flex-row md:flex-col gap-5 justify-center items-center h-full">
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
    </div>
  );
};

export default SideBar;
