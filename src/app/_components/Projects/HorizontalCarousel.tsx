import { useRef } from "react";
import ProjectAvatar from "./ProjectAvatar";
import { useHorizontalAutoScroll } from "@/hooks/useHorizontalAutoScroll";
import { Project } from "@/types/Project";

interface HorizontalCarouselProps {
  projects: Project[];
  setSelectedIndex: (index: number) => void;
}

const HorizontalCarousel = ({
  projects,
  setSelectedIndex,
}: HorizontalCarouselProps) => {
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useHorizontalAutoScroll(horizontalRef, 105);

  return (
    <div className="block md:hidden mt-3 overflow-hidden px-2 w-full max-w-[325px] mx-auto">
      <div ref={horizontalRef} className="flex gap-7 overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="flex-shrink-0 w-[80px] cursor-pointer">
            <ProjectAvatar
              image={project.image}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
