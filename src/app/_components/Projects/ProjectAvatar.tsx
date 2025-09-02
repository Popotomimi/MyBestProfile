import Image from "next/image";

const ProjectAvatar = ({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) => (
  <div onClick={onClick} className="cursor-pointer flex justify-center py-4">
    <Image
      className="rounded-full w-[80px] mx-3 h-[80px] md:w-[100px] md:h-[100px] object-cover shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      src={image}
      width={100}
      height={100}
      alt="Imagem do projeto"
    />
  </div>
);

export default ProjectAvatar;
