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
const DUPLICATED_PROJECTS = [...projects, ...projects];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [position, setPosition] = useState(projects.length);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  const startScroll = () => {
    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        const maxIndex = DUPLICATED_PROJECTS.length - 1;
        if (prev >= maxIndex) {
          stopScroll();
          setTimeout(() => {
            setPosition(projects.length);
            startScroll();
          }, 50);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div id="projects" className="mt-28 px-4">
      <h2 className="text-left text-2xl mb-5">Projects</h2>
      <Line />
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 mt-10 px-4">
        {/* Carrossel da Esquerda */}
        <div
          className="relative basis-full md:basis-1/2 h-96 overflow-hidden group"
          onMouseEnter={stopScroll}
          onMouseLeave={startScroll}>
          <div
            className="flex flex-col transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${
                position * ITEM_HEIGHT - CENTER_OFFSET
              }px)`,
            }}>
            {DUPLICATED_PROJECTS.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  const actualIndex = index % projects.length;
                  setSelectedIndex(actualIndex);
                  setPosition(index);
                }}
                className="cursor-pointer flex justify-center py-4">
                <Image
                  className="rounded-full"
                  src={project.image}
                  width={150}
                  height={150}
                  alt="Imagem do projeto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel da Direita */}
        <div
          key={selectedIndex}
          className="basis-full md:basis-1/2 h-96 p-4 flex items-center justify-center bg-zinc-900 rounded shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-slide-in">
          <div className="text-center text-white">
            <Image
              src={projects[selectedIndex].image}
              width={250}
              height={250}
              alt="Imagem do projeto"
              className="rounded-sm m-auto"
            />
            <h3 className="font-bold mt-5 text-2xl mb-5">
              {projects[selectedIndex].content}
            </h3>
            <p className="text-sm">{projects[selectedIndex].text}</p>
            <div className="flex justify-center gap-6 mt-6">
              <Link
                href={projects[selectedIndex].git}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out text-3xl">
                <IoLogoGithub />
              </Link>
              <Link
                href={projects[selectedIndex].online}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out text-3xl">
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
