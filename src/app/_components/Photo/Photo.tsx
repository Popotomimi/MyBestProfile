import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center mt-6">
      <Avatar className="w-60 h-60 shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)]">
        <Image
          src="/img/Euzinho.jpg"
          alt="Roberto"
          width={250}
          height={250}
          priority
          quality={100}
          className="rounded-full object-cover shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
      </Avatar>
    </div>
  );
};

export default Photo;
