import { useEffect, useRef } from "react";
import ProjectAvatar from "./ProjectAvatar";
import { useVerticalAutoScroll } from "@/hooks/useVerticalAutoScroll";
import { Project } from "@/types/Project";

const ITEM_HEIGHT = 160;
const VISIBLE_ITEMS = 3;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const CENTER_OFFSET = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2;

interface VerticalCarouselProps {
  projects: Project[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

const VerticalCarousel = ({
  projects,
  setSelectedIndex,
  position,
  setPosition,
}: VerticalCarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { startScroll, stopScroll } = useVerticalAutoScroll(
    projects.length,
    setPosition
  );

  useEffect(() => {
    if (position === projects.length - 1 && containerRef.current) {
      setTimeout(() => {
        containerRef.current!.style.transition = "none";
        setPosition(0);
        setTimeout(() => {
          containerRef.current!.style.transition = "transform 0.7s ease-in-out";
        }, 50);
      }, 700);
    }
  }, [position, projects.length, setPosition]);

  return (
    <div
      className="hidden md:block relative h-[420px] overflow-hidden"
      onMouseEnter={stopScroll}
      onMouseLeave={startScroll}>
      <div
        ref={containerRef}
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${position * ITEM_HEIGHT - CENTER_OFFSET}px)`,
        }}>
        {projects.map((project, index) => (
          <ProjectAvatar
            key={index}
            image={project.image}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
