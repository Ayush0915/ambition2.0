"use client";
import Button from "@/components/global/Button";
import Countdown from "@/components/elements/Countdown";
import { redirect, RedirectType } from "next/navigation";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Background geometric shapes - matching reference */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left red triangular shapes */}
        <div className="absolute top-20 left-0 w-0 h-0 border-l-[120px] border-l-red-500 border-b-[80px] border-b-transparent"></div>
        <div className="absolute top-32 left-16 w-0 h-0 border-r-[100px] border-r-red-400 border-t-[60px] border-t-transparent"></div>

        {/* Left yellow triangular shape */}
        <div className="absolute top-1/2 left-0 w-0 h-0 border-l-[150px] border-l-yellow-400 border-t-[100px] border-t-transparent"></div>
        <div className="absolute bottom-32 left-0 w-0 h-0 border-l-[120px] border-l-yellow-500 border-b-[80px] border-b-transparent"></div>

        {/* Right green diamond */}
        <div className="absolute top-40 right-20 w-20 h-20 bg-green-400 transform rotate-45"></div>

        {/* Right orange/red pill shape */}
        <div className="absolute top-1/2 right-16 w-24 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transform rotate-12"></div>

        {/* Bottom right purple triangular shapes */}
        <div className="absolute bottom-20 right-0 w-0 h-0 border-r-[140px] border-r-purple-500 border-t-[90px] border-t-transparent"></div>
        <div className="absolute bottom-32 right-20 w-0 h-0 border-l-[80px] border-l-purple-400 border-b-[60px] border-b-transparent"></div>

        {/* Bottom right blue lightning bolt shape */}
        <div className="absolute bottom-16 right-32 text-6xl text-blue-500 transform rotate-12">⚡</div>
      </div>



      {/* "PRESENTING" */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.3em] mb-8 z-10 text-black dark:text-white">PRESENTING</h2>

      {/* ambition Title - matching reference exactly */}
      <div className="relative z-10 mb-8">
        <div className="bg-lime-400 dark:bg-lime-500 px-8 py-4 transform -rotate-2 shadow-xl border-4 border-black dark:border-white">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-500 border-2 border-black dark:border-white"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-gray-900 tracking-tight">
              am<span className="text-green-600 dark:text-green-400">BIT</span>ion
            </h1>
            <div className="w-6 h-6 bg-red-500 border-2 border-black dark:border-white"></div>
          </div>
        </div>
      </div>

      {/* Register Button */}

      <div className="mb-12 z-10">
        <Button className="bg-cyan-400 hover:bg-cyan-500 px-12 py-4 text-2xl font-black text-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-200 border-4 border-black transform hover:scale-105" onClick={() => { redirect("https://tally.so/r/wgBdR1", RedirectType.push) }}>
          Register
        </Button>
      </div>
      {/* Countdown Timer */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl px-12 py-8 shadow-2xl border-2 border-gray-200 dark:border-gray-600 z-10 max-w-4xl mx-4 w-full">
        <h3 className="text-lg font-bold mb-6 text-black dark:text-white text-center">Time left to Register</h3>
        <Countdown targetDate="2025-09-20T09:59:59" />
        {/* Dots below countdown */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
        </div>
      </div>

      {/* "The Ultimate Hackathon Experience" - repositioned for mobile */}
      <div className="absolute bottom-1/4 left-4 md:left-8 text-left z-10 hidden sm:block">
        <div className="bg-yellow-300 dark:bg-yellow-400 px-6 py-4 transform -rotate-2 shadow-lg border-2 border-black dark:border-white">
          <p className="text-black dark:text-gray-900 font-bold text-xl leading-tight">
            The Ultimate<br />Hackathon<br />Experience
          </p>
        </div>
      </div>

      {/* Mobile version - positioned below countdown */}
      <div className="block sm:hidden mt-8 z-10">
        <div className="bg-yellow-300 dark:bg-yellow-400 px-6 py-4 transform -rotate-1 shadow-lg border-2 border-black dark:border-white">
          <p className="text-black dark:text-gray-900 font-bold text-lg text-center">
            The Ultimate Hackathon Experience
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
