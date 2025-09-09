"use client";

import { useState, useEffect } from "react";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";

const frontendIcons = [
  { icon: <FaReact />, label: "React", color: "#61DBFB" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#c3c3c3" },
  { icon: <FaAngular />, label: "Angular", color: "#DD0031" },
  { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <FaHtml5 />, label: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "#1572B6" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8" },
  { icon: <SiShadcnui />, label: "Shadcn", color: "#FFFFFF" },
  { icon: <FaVuejs />, label: "Vue", color: "#42B883" },
];

const getCircularPosition = (index: number, total: number, radius: number) => {
  const angle = (index / total) * 2 * Math.PI;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return {
    top: `${y.toFixed(2)}%`,
    left: `${x.toFixed(2)}%`,
  };
};

const FrontendSkillsCircle = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (animatingIndex !== null) {
      const timeout = setTimeout(() => {
        setAnimatingIndex(null);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [animatingIndex]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setAnimatingIndex(index);
  };

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[400px] h-[300px] sm:h-[400px] mx-auto mt-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-5xl p-10 sm:p-6 rounded-full bg-zinc-900 shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)]">
        <div
          className="flex flex-col items-center justify-center gap-1"
          style={{ color: frontendIcons[selectedIndex ?? 0].color }}>
          {frontendIcons[selectedIndex ?? 0].icon}
          <p className="text-[1rem] absolute top-28">
            {frontendIcons[selectedIndex ?? 0].label}
          </p>
        </div>
      </div>
      {frontendIcons.map((item, index) => {
        const isAnimating = animatingIndex === index;
        const position = getCircularPosition(index, frontendIcons.length, 40);

        return (
          <div
            key={index}
            className={`absolute text-xl sm:text-3xl cursor-pointer transition-all bg-zinc-900 p-2 sm:p-3 rounded-full shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)] duration-700 ease-in-out ${
              isAnimating ? "top-1/2 left-1/2 opacity-0 scale-0" : ""
            } hover:scale-110`}
            style={{
              top: isAnimating ? undefined : position.top,
              left: isAnimating ? undefined : position.left,
              transform: "translate(-50%, -50%)",
              color: item.color,
              zIndex: isAnimating ? 40 : 10,
            }}
            title={item.label}
            onClick={() => handleClick(index)}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default FrontendSkillsCircle;
