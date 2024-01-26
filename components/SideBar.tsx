"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constans";
import Link from "next/link";

const SideBar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [prevPath, setPrevPath] = useState("");

  const path = usePathname();

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="fixed right-3 sm:right-10 top-[30%] sm:top-[40%] z-[30] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50 ">
      <AnimatePresence mode="wait">
        <div className="flex flex-col gap-5 justify-center items-center h-full">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setIsActive(link.name)}
            >
              <link.icon
                className={`w-[28px] h-[28px] ${
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
