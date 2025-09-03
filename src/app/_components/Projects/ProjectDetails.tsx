import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { GrDeploy } from "react-icons/gr";
import { Project } from "@/types/Project";

const ProjectDetails = ({ project }: { project: Project }) => (
  <div className="basis-full md:basis-[80%] md:ml-44 my-5 h-96 p-4 flex items-center justify-center md:max-w-[50%] bg-zinc-900 rounded shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-slide-in">
    <div className="text-center text-white max-w-full">
      <div className="group">
        <Image
          src={project.image}
          width={180}
          height={180}
          alt="Imagem do projeto"
          className="rounded-sm m-auto object-cover max-w-[250px] w-full h-auto group-hover:scale-105 duration-300 group-hover:-rotate-6"
        />
      </div>
      <h3 className="font-bold mt-5 text-xl mb-4">{project.content}</h3>
      <p className="text-sm px-2">{project.text}</p>
      <div className="flex justify-center gap-6 mt-6">
        <Link
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out text-3xl">
          <IoLogoGithub />
        </Link>
        <Link
          href={project.online}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-600 transform hover:scale-110 transition duration-300 ease-in-out text-3xl">
          <GrDeploy />
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectDetails;
