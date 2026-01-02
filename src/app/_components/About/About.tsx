import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-8 mt-28 px-4">
      {/* Imagem */}
      <div className="w-72 h-72 shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)] rounded-lg">
        <Image
          src="https://avatars.githubusercontent.com/u/92410083?v=4"
          alt="Roberto"
          width={250}
          height={250}
          priority
          quality={100}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>

      {/* Texto */}
      <div className="max-w-md md:pl-16 text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4">Sobre</h3>
        <p className="text-sm">
          Desenvolvedor Full Stack com 3 anos de experiência e formação em
          Análise e Desenvolvimento de Sistemas. Atuo com tecnologias modernas
          como React, Next.js, TypeScript, Node.js e NestJS, criando aplicações
          escaláveis e performáticas. Tenho domínio em arquitetura de software,
          integração de APIs e boas práticas de desenvolvimento. Sou movido por
          desafios e pela constante evolução técnica, sempre buscando contribuir
          com soluções eficientes e bem estruturadas
        </p>
      </div>
    </div>
  );
};

export default About;
