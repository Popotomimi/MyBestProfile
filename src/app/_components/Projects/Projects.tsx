import { useState } from "react";
import Line from "../Line/Line";
import { projects } from "@/data/projects";
import ProjectDetails from "./ProjectDetails";
import VerticalCarousel from "./VerticalCarousel";
import HorizontalCarousel from "./HorizontalCarousel";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [position, setPosition] = useState(0);

  return (
    <div id="projects" className="mt-28 px-4">
      <h2 className="text-left text-2xl mb-5">Projects</h2>
      <Line />
      <div className="flex flex-row gap-4 mt-10 px-4 w-full overflow-hidden">
        <VerticalCarousel
          projects={projects}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          position={position}
          setPosition={setPosition}
        />
        <ProjectDetails
          key={`project-${selectedIndex}`}
          project={projects[selectedIndex]}
        />
      </div>
      <HorizontalCarousel
        projects={projects}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
};

export default Projects;
