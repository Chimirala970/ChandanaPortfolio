

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          
          {/* Left Column - Text */}
          <div className="space-y-6">
            {/* <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Naga
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">
                Chandana
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Priya
              </span>
            </h1> */}

            <h1 className="fashion-font text-3xl md:text-6xl font-bold tracking-tight">
               <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
               <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                  Naga
               </span>
               <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">
                  Chandana
               </span>
               <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                  Priya
               </span>
            </h1>


            <p className="body-font text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <img
                src="/projects/ChandanaFormalPhoto.jpg" // <-- replace with your image path
                alt="Chandana Priya"
                className="rounded-2xl shadow-lg object-cover w-85 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
