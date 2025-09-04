import React, { useState, useEffect } from "react";
import Image from "next/image";
import Line from "../Line/Line";

const certificates = [
  { id: 1, src: "/img/English.jpg", alt: "Certificado 1" },
  { id: 2, src: "/img/Next.jpg", alt: "Certificado 2" },
  { id: 3, src: "/img/Faculdade.jpg", alt: "Certificado 3" },
  { id: 4, src: "/img/Nlw.jpg", alt: "Certificado 4" },
  { id: 5, src: "/img/MongoDB.jpg", alt: "Certificado 5" },
  { id: 6, src: "/img/Node.jpg", alt: "Certificado 6" },
  { id: 7, src: "/img/React.jpg", alt: "Certificado 7" },
  { id: 8, src: "/img/TailWind.jpg", alt: "Certificado 8" },
  { id: 9, src: "/img/TypeScript.jpg", alt: "Certificado 9" },
];

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [horizontalSpacing, setHorizontalSpacing] = useState(280); // default seguro

  useEffect(() => {
    const updateSpacing = () => {
      const width = window.innerWidth;
      setHorizontalSpacing(width < 640 ? 140 : 280);
    };

    updateSpacing(); // inicial
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="certificate" className="mt-16 px-4">
      <h2 className="text-start text-2xl mb-5">Certifications</h2>
      <Line />

      <div className="relative w-full max-w-[800px] h-[220px] sm:h-[240px] mx-auto mt-12 flex justify-center items-center overflow-x-visible sm:overflow-hidden">
        {certificates.map((cert, index) => {
          const position = index - activeIndex;

          let styleClass = "";
          if (position === 0) {
            styleClass =
              "w-[200px] sm:w-[260px] h-[140px] sm:h-[180px] z-30 scale-100";
          } else if (Math.abs(position) === 1) {
            styleClass =
              "w-[100px] sm:w-[150px] h-[70px] sm:h-[100px] z-20 scale-90 opacity-80";
          } else {
            styleClass =
              "w-[80px] h-[60px] opacity-50 scale-75 z-10 hidden sm:block";
          }

          const translateY = position === 0 ? "-50%" : "-40%";

          return (
            <div
              key={cert.id}
              className={`absolute top-1/2 transition-all duration-500 ease-in-out cursor-pointer ${styleClass}`}
              style={{
                left: `calc(50% + ${position * horizontalSpacing}px)`,
                transform: `translateX(-50%) translateY(${translateY})`,
              }}
              onClick={() => handleClick(index)}>
              <Image
                src={cert.src}
                alt={cert.alt}
                width={300}
                height={200}
                className="rounded shadow-lg object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
