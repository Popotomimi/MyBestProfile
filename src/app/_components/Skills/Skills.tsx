import React, { useState } from "react";
import Line from "../Line/Line";
import FrontendSkillsCircle from "./FrontendSkillsCircle";
import BackendSkillsCircle from "./BackendSkillsCircle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 1 ? 0 : 1));
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="resume" className="mt-16 px-4">
      <h2 className="text-end text-2xl mb-5">Skills</h2>
      <Line />

      {/* Botões de seleção */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => handleSelect(0)}
          className={`px-4 py-2 rounded cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)] ${
            activeIndex === 0 ? "bg-purple-600 text-white" : "bg-zinc-900"
          }`}>
          FrontEnd
        </button>
        <button
          onClick={() => handleSelect(1)}
          className={`px-4 py-2 rounded cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)] ${
            activeIndex === 1 ? "bg-purple-600 text-white" : "bg-zinc-900"
          }`}>
          BackEnd
        </button>
      </div>

      {/* Carrossel com transição */}
      <div className="relative flex justify-center items-center mt-12 min-h-[350px] sm:min-h-[500px] w-full px-4 sm:px-0 sm:max-w-[500px] mx-auto overflow-hidden">
        {/* Seta esquerda */}
        <button
          onClick={handlePrev}
          className="absolute cursor-pointer left-0 text-2xl p-1 rounded-md bg-zinc-900 hover:scale-110 hover:text-purple-600 transition-transform z-50">
          <IoIosArrowBack />
        </button>

        {/* Frontend */}
        <div
          className={`absolute w-full transition-all duration-500 ease-in-out ${
            activeIndex === 0
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 -translate-x-full z-10 pointer-events-none"
          }`}>
          <FrontendSkillsCircle />
        </div>

        {/* Backend */}
        <div
          className={`absolute w-full transition-all duration-500 ease-in-out ${
            activeIndex === 1
              ? "opacity-100 translate-x-0 z-20"
              : "opacity-0 translate-x-full z-10 pointer-events-none"
          }`}>
          <BackendSkillsCircle />
        </div>

        {/* Seta direita */}
        <button
          onClick={handleNext}
          className="absolute cursor-pointer right-0 text-2xl p-1 rounded-md bg-zinc-900 hover:scale-110 hover:text-purple-600 transition-transform z-50">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Skills;
