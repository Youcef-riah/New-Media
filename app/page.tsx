"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="scroll-smooth z-20 relative bg-[#0b1923] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <img className=" z-10 absolute rotate-90 top-0 left-[1000px] h-[450px] opacity-5" src="arab1.svg" alt="" />
      <img className=" z-10 absolute rotate-90  top-0 right-[1000px] h-[450px]  opacity-5" src="arab1.svg" alt="" />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
