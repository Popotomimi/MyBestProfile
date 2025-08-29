import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center mt-6">
      <Avatar className="w-60 h-60 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        <Image
          src="https://media.licdn.com/dms/image/v2/D4D03AQFy2HLU_wk0lA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699041260610?e=1759363200&v=beta&t=5g-Qq7xqvRrvrh74p3AA8sYzRrwwXDEFUpyq4h1WSks"
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
