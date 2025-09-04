import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdWorkHistory } from "react-icons/md";

const ExperienceMobile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [pulse, setPulse] = useState(false);

  const handleToggle = () => {
    setIsEnabled(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isEnabled) {
      interval = setInterval(() => {
        setPulse(true);
        setTimeout(() => setPulse(false), 1000);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [isEnabled]);

  return (
    <div className="flex flex-row items-start gap-4 mt-16">
      {/* Linha vertical com ícone à esquerda */}
      <div
        className="flex flex-col items-center justify-start min-h-[460px] cursor-pointer"
        onClick={handleToggle}>
        <div className="w-0.5 flex-1 bg-zinc-600" />
        <MdWorkHistory
          size={28}
          className={`my-2 text-purple-600 transition-all duration-300 hover:scale-125 hover:rotate-12 ${
            pulse ? "scale-125 opacity-60" : ""
          }`}
        />
        <div className="w-0.5 flex-1 bg-zinc-600" />
      </div>

      {/* Cards empilhados à direita */}
      <div className="flex flex-col gap-6 flex-1">
        <div
          className={`transition-all duration-300 ${
            !isEnabled ? "blur-[1px] pointer-events-none" : ""
          }`}>
          <Card className="bg-zinc-900 shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)] text-white border-none">
            <CardHeader>
              <CardTitle>Desenvolvedor Javascript – FuturoTec</CardTitle>
              <span>Janeiro/2024 - Atual</span>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Desenvolvimento fullstack de aplicações web responsivas e de
                alto desempenho com Next, React, TailWind... <br />
                Desenvolvimento de API REST com Node, Nest, Express...
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div
          className={`transition-all duration-300 ${
            !isEnabled ? "blur-[1px] pointer-events-none" : ""
          }`}>
          <Card className="bg-zinc-900 shadow-[-4px_-4px_10px_rgba(255,255,255,0.1),4px_4px_10px_rgba(0,0,0,0.2)] text-white border-none">
            <CardHeader>
              <CardTitle>MS Analyst – Neoris</CardTitle>
              <span>Julho/2023 - Atual</span>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitoramento de KPIs, gestão de riscos e otimização de
                processos internos, controle de SLA e planejamento de
                projetos...
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExperienceMobile;
