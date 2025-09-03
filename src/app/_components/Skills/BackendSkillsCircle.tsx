import { useState, useEffect } from "react";
import { FaNodeJs, FaDocker, FaGit, FaGithub } from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiExpress,
  SiZod,
  SiTypeorm,
  SiSequelize,
  SiPrisma,
  SiMongoose,
} from "react-icons/si";

const backendIcons = [
  { icon: <FaNodeJs />, label: "Node.js", color: "#68A063" },
  { icon: <SiNestjs />, label: "Nest.js", color: "#E0234E" },
  { icon: <SiExpress />, label: "Express", color: "#c3c3c3" },
  { icon: <SiMysql />, label: "MySQL", color: "#00758F" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
  { icon: <SiTypeorm />, label: "TypeORM", color: "#F80000" },
  { icon: <SiSequelize />, label: "Sequelize", color: "#03AFEF" },
  { icon: <SiPrisma />, label: "Prisma", color: "#0C344B" },
  { icon: <SiMongoose />, label: "Mongoose", color: "#800000" },
  { icon: <SiZod />, label: "Zod", color: "#3E5C9A" },
  { icon: <FaDocker />, label: "Docker", color: "#0db7ed" },
  { icon: <FaGit />, label: "Git", color: "#F1502F" },
  { icon: <FaGithub />, label: "GitHub", color: "#6e5494" },
];

const positions = [
  { top: "0%", left: "50%" },
  { top: "30%", left: "92%" },
  { top: "50%", left: "100%" },
  { top: "75%", left: "90%" },
  { top: "95%", left: "75%" },
  { top: "100%", left: "50%" },
  { top: "75%", left: "7%" },
  { top: "50%", left: "0%" },
  { top: "30%", left: "7%" },
  { top: "10%", left: "25%" },
  { top: "10%", left: "75%" },
  { top: "95%", left: "25%" },
  { top: "50%", left: "80%" },
  { top: "50%", left: "20%" },
];

const BackendSkillsCircle = () => {
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
    <div className="relative w-full max-w-[400px] h-[400px] mx-auto mt-10">
      {/* Ícone central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl p-10 rounded-full bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        <div style={{ color: backendIcons[selectedIndex ?? 0].color }}>
          {backendIcons[selectedIndex ?? 0].icon}
        </div>
      </div>

      {/* Ícones ao redor */}
      {backendIcons.map((item, index) => {
        const isAnimating = animatingIndex === index;
        const position = positions[index];

        return (
          <div
            key={index}
            className={`absolute text-3xl cursor-pointer transition-all bg-zinc-900 p-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] duration-700 ease-in-out ${
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

export default BackendSkillsCircle;
