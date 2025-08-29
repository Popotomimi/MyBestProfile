import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Line from "../Line/Line";

const projects = [
  { id: 0, image: "/img/NextGram.jpg", content: "Detalhes do NextGram" },
  { id: 1, image: "/img/ReactQuiz.jpg", content: "Detalhes do ReactQuiz" },
  { id: 2, image: "/img/Album.jpg", content: "Detalhes do ReactQuiz" },
];

const Projects = () => {
  const [autoIndex, setAutoIndex] = useState(0); // índice do item em destaque no carrossel da esquerda
  const [selectedIndex, setSelectedIndex] = useState(0); // índice do item exibido no carrossel da direita
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // limpa o intervalo ao desmontar
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div id="projects" className="mt-28 px-4">
      <h2 className="text-left text-2xl mb-5">Projects</h2>
      <Line />
      <div className="flex flex-row items-start justify-center gap-8 mt-10 px-4">
        {/* Carrossel da Esquerda */}
        <div
          className="flex flex-col w-full md:w-1/2 h-96 overflow-y-auto p-4 space-y-4"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedIndex(index)}
              className={`p-4 rounded-full shadow cursor-pointer w-50 h-50 transition-all duration-300 ${
                autoIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-900 text-white"
              }`}>
              <Image
                className="rounded-full"
                src={project.image}
                width={250}
                height={250}
                alt="Imagem do projeto"
              />
            </div>
          ))}
        </div>

        {/* Carrossel da Direita */}
        <div className="w-full md:w-1/2 h-96 p-4 flex items-center justify-center bg-gray-900 rounded shadow">
          <div className="text-center text-white">
            <Image
              src={projects[selectedIndex].image}
              width={250}
              height={250}
              alt="Imagem do projeto"
            />
            <p>{projects[selectedIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
