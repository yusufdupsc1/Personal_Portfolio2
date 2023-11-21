"use client";
import dynamic from "next/dynamic";
import { Socials } from "@/constants";
import Image from "next/image";
import SocialIcons from "../sub/SocialIcons";

const Navbar = () => {
  return (
    <nav className="w-full h-[50px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
     
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] gap-3 bg-gradient-to-r rounded-full">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hi, I am Yusuf Ali.
          </span>
        </a>

        <div className="w-[400px] h-full flex flex-row justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] text-gray-200 rounded-t-3xl">
            <a href="https://github.com/yusufdupsc1" target="_blank" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            
          </div>
          
        </div>
        <SocialIcons />

      </div>
    </nav>
  );
};

export default Navbar;
