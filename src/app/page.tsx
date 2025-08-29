"use client";

import { useEffect } from "react";
import MobileMenu from "./_components/Navbar/MobileMenu";
import Navbar from "./_components/Navbar/Navbar";
import Photo from "./_components/Photo/Photo";
import { Button } from "@/components/ui/button";
import About from "./_components/About/About";
import Projects from "./_components/Projects/Projects";

export default function Home() {
  useEffect(() => {
    const el = document.getElementById("message");
    el?.classList.add("animate");
  }, []);

  return (
    <div className="text-white mb-10">
      {/* Navbar desktop */}
      <nav className="hidden md:block">
        <Navbar />
      </nav>

      {/* Navbar + Avatar mobile */}
      <div className="md:hidden">
        <MobileMenu />
        <div className="mt-28"></div>
        <Photo />
      </div>

      {/* Avatar para desktop */}
      <section className="hidden md:flex justify-center mt-10">
        <Photo />
      </section>
      <div className="text-center mt-5 text-white">
        <h3 className="text-xl">Olá</h3>
        <h1 className="text-2xl font-bold">Sou o Roberto de Oliveira</h1>
        <p className="text-xl font-bold">
          FullStack{" "}
          <span id="message" className="message text-red-600">
            JavaScript Developer
          </span>
        </p>
        <p className="w-96 m-auto pt-5 text-sm">
          {" "}
          Tenho paixão por transformar ideias em soluções digitais eficientes,
          utilizando tecnologias modernas para criar interfaces intuitivas e
          sistemas robustos. Busco sempre aprender, evoluir e entregar projetos
          com qualidade e propósito.
        </p>
        <div className="flex items-center justify-center gap-7 mt-10">
          <Button className="cursor-pointer text-white py-2 px-5 bg-zinc-900 shadow-[0_2px_10px_rgba(255,255,255,0.1)] transition-colors hover:bg-purple-600 hover:text-white">
            Learn More
          </Button>
          <Button className="cursor-pointer text-white py-2 px-5 bg-zinc-900 shadow-[0_2px_10px_rgba(255,255,255,0.1)] transition-colors hover:bg-purple-600 hover:text-white">
            Contact Me
          </Button>
        </div>
      </div>
      <Projects />
      <About />
    </div>
  );
}
