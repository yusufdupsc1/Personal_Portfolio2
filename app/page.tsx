'use client'
import dynamic from "next/dynamic";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/sub/HeroContent";
import Image from "next/image";

export const revalidate = 900;

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroContent />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
