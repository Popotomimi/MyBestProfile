import React, { useState } from "react";
import Line from "../Line/Line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdWorkHistory } from "react-icons/md";

const Experience = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(true);
  };

  return (
    <div id="certificate" className="mt-16 px-4">
      <h2 className="text-end text-2xl mb-5">Experience</h2>
      <Line />

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-10">
        {/* Card 1 - Left Top */}
        <div
          className={`flex-1 self-start transition-all duration-300
            ${!isEnabled ? "blur-[1px] pointer-events-none" : ""}
          `}>
          <Card>
            <CardHeader>
              <CardTitle>Desenvolvedor Javascript – FuturoTec</CardTitle>
              <span>Janeiro/2024 - Atual</span>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Desenvolvimento fullstack de aplicações web responsivas e de
                alto desempenho...
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Middle Icon */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={handleToggle}>
          <div className="w-0.5 h-32 bg-zinc-600" />
          <MdWorkHistory
            size={32}
            className="my-2 p-1 text-white hover:text-purple-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
          />
          <div className="w-0.5 h-32 bg-zinc-600" />
        </div>

        {/* Card 2 - Right Bottom */}
        <div
          className={`flex-1 self-end transition-all duration-300
            ${!isEnabled ? "blur-[1px] pointer-events-none" : ""}
          `}>
          <Card>
            <CardHeader>
              <CardTitle>MS Analyst – Neoris</CardTitle>
              <span>Julho/2023 - Atual</span>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Gestão de chamados via ServiceNow, controle de SLA e
                planejamento de projetos...
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
