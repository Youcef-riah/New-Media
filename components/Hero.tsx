import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    
    <div id="Hero" className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
       
       
        
       
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#ff0d00"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
    

      
      <div
        className="h-screen w-full dark:bg-whitw bg-[#0b1923] dark:bg-grid-white/[0.1] bg-grid-white/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0b1923]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,blue)]"
        />
      </div>


      <div className="flex md:justify-center lg:justify-left max-lg:flex-col-reverse relative my-20  z-10">
 


        
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col  lg:items-left lg:justify-center ">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
          */}


         
          <h1   className="text-left text-[30px] md:text-5xl lg:text-5xl font-bold mb-2 mt-[-20px]">

            DIGITAL MAREKTING & CREATIVE AGENCY
          
          </h1>
          
          
  
          

          <p className="text-left text-white md:tracking-wider mb-4 text-sm md:text-lg  lg:text-xl">
            We Help Brands & Businesses Gain a Competitive Advantage in the6
            Connected World.
          </p>

          <a href="#about">
            <MagicButton
              title="our work"
              icon={<FaLocationArrow />}
              position="right"

            />
          </a>
        </div>
          <img className="lg:w-[670px] lg:h-[670px]  " src="/Artboard.png" alt="" />

      </div>
    </div>
  );
};

export default Hero;
