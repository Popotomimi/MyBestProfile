import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Line from "../Line/Line";
import { projects } from "@/data/projects";
import { IoLogoGithub } from "react-icons/io";
import { GrDeploy } from "react-icons/gr";
import Link from "next/link";

const ITEM_HEIGHT = 160;
const CONTAINER_HEIGHT = 384;
const CENTER_OFFSET = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2;

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  const startScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        const next = prev + 1;
        if (next >= projects.length) {
          return 0;
        }
        return next;
      });
    }, 3000);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);

    // 👇 Lógica para subir ou descer
    if (index < position && position > 0) {
      setPosition((prev) => prev - 1);
    } else if (index > position && position < projects.length - 1) {
      setPosition((prev) => prev + 1);
    }
  };

  return (
    <div id="projects" className="mt-28 px-4">
      <h2 className="text-left text-2xl mb-5">Projects</h2>
      <Line />
      <div className="flex flex-row flex-nowrap justify-start items-start gap-4 mt-10 px-4 w-full overflow-hidden">
        {/* Carrossel da Esquerda */}
        <div
          className="relative basis-[20%] min-w-[100px] h-96 overflow-hidden"
          onMouseEnter={stopScroll}
          onMouseLeave={startScroll}>
          <div
            className="flex flex-col transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${
                position * ITEM_HEIGHT - CENTER_OFFSET
              }px)`,
            }}>
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className="cursor-pointer flex justify-center py-4">
                <Image
                  className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover max-w-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  src={project.image}
                  width={100}
                  height={100}
                  alt="Imagem do projeto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel da Direita */}
        <div
          key={selectedIndex}
          className="basis-[80%] md:ml-36 h-96 p-4 flex items-center justify-center md:max-w-[50%] bg-zinc-900 rounded shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-slide-in">
          <div className="text-center text-white max-w-full">
            <Image
              src={projects[selectedIndex].image}
              width={180}
              height={180}
              alt="Imagem do projeto"
              className="rounded-sm m-auto object-cover max-w-[250px] w-full h-auto"
            />
            <h3 className="font-bold mt-5 text-xl mb-4">
              {projects[selectedIndex].content}
            </h3>
            <p className="text-sm px-2">{projects[selectedIndex].text}</p>
            <div className="flex justify-center gap-6 mt-6">
              <Link
                href={projects[selectedIndex].git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out md:text-3xl">
                <IoLogoGithub />
              </Link>
              <Link
                href={projects[selectedIndex].online}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out md:text-3xl">
                <GrDeploy />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
