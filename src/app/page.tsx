'use client';

import ChooseGame from "@/components/ChooseGame";
import React from "react";
import Image from "next/image";
import time from "@/images/time.png";
import { ArrowLeft } from "lucide-react";
import Lucca from "@/images/lucca.png";
import Willian from "@/images/willian.png";
import Diego from "@/images/diego.png.jpg";
import Augusto from "@/images/augusto.png";
import Matheus from "@/images/mateus.png";
import fabricio from "@/images/fabricio.jpg";
import LogoMarca from "@/images/LogoMarca.png";


export default function Home() {
  const [showGame, setShowGame] = React.useState(false);
  const [showCredits, setShowCredits] = React.useState(false);
  const [showGuide, setShowGuide] = React.useState(false);

  const startGame = () => {
    setShowGame(true);
  }

  const startCredits = () => {
    setShowCredits(true);
  }

  const startGuide = () => {
    setShowGuide(true);
  }

  const credits = [
    "William Araújo de Castro",
    "Lucca Tourinho Santos Vieira",
    "Augusto Rauedys Carneiro",
    "Matheus Andrade Mota",
    "Fabricio Tosta Pereira",
    "Diego Santana Gomes dos Santos"
  ];

  const handleReturn = () => {
    return (
      <div onClick={reset} className="fixed bottom-5 left-5 w-[50px] h-[50px] bg-black flex items-center justify-center rounded-3xl hover:cursor-pointer">
        <ArrowLeft />
      </div>
    )
  };

  const reset = () => {
    setShowGame(false);
    setShowCredits(false);
    setShowGuide(false);
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      {
        showGame
          ? <ChooseGame />
          : 
            !showCredits
            ? ( 
               !showGuide ? 
                (
                  <div className='flex flex-col items-center justify-around w-[1440px] h-full bg-green-600 p-6 rounded-xl'>
                     <h1 className="text-3xl font-bold text-white">
                      GLOBE CITY
                    </h1> 
                    <div className="relative w-full h-[100px] sm:h-[120px] md:h-[130px] lg:h-[150px] xl:h-[200px] 2xl:h-[250px]">
                    <Image src={LogoMarca} alt="Globe City" fill className="object-contain"/>
                    </div>
                    <div className="flex flex-col justify-between gap-9 items-center w-full p-6">
                      <button onClick={startGame} className="text-xl font-bold text-white border-2 border-white bg-cyan-500 p-3 rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-cyan-300 transition-all duration-300 w-[150px]">
                        Start
                      </button>
                      <button onClick={startGuide}  className="text-xl font-bold text-white border-2 border-white bg-cyan-500 p-3 rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-cyan-300 transition-all duration-300 w-[150px]">
                        Guide
                      </button>
                      <button onClick={startCredits} className="text-xl font-bold text-white border-2 border-white bg-cyan-500 p-3 rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-cyan-300 transition-all duration-300 w-[150px]">
                        Credits
                      </button>
                    </div>
                    <div className="text-md font-bold text-white rounded-lg p-2 border-2 border-white bg-cyan-500">
                      NASA Space Apps 2024 - Salvador - Brazil
                    </div>
                </div>
                ) : (
                  <div className='flex flex-col items-center justify-start w-[1440px] h-full bg-green-600 p-6 rounded-xl overflow-y-auto max-h-screen'>
                    <p className="text-white whitespace-pre-wrap text-justify text-xl">
                      GUIDE:{"\n\n"}
                      Our challenge was to create a GLOBE Program game to help players understand the world around them,
                      build awareness about one or more local or global environmental topics (e.g. urbanization, water pollution,
                      drought, heat waves, floods).{"\n\n"}
                      CONTEXT:{"\n\n"}
                      The GLOBE (Global Learning and Observations for the Benefit of the Environment) Program is an international
                      science and education program that focuses on promoting scientific literacy and building connections among
                      people passionate about the environment.{"\n\n"}
                      <span className="font-bold">GLOBE has three main goals:{"\n"}</span>
                      <span className="font-bold">(1) To increase environmental awareness;{"\n"}</span>                 
                      <span className="font-bold">(2) To contribute to the scientific understanding of Earth;{"\n"}</span>                 
                      <span className="font-bold">(3) To support improved student achievement in science and mathematics.{"\n\n"}</span>
                      Operating in more than 125 countries, GLOBE provides information on approximately 40 different protocols
                      (or ways of making environmental observations) that provide hands-on learning opportunities to learn about
                      Earth’s pedosphere, hydrosphere, atmosphere, and biosphere.{"\n"}
                    </p>
                  </div>
                )
            ) :
            (
              <div className='flex flex-col items-center justify-around w-[1440px] h-full bg-green-600 p-6 rounded-xl'>
                <p className="text-xl font-bold text-white">
                This project was developed by the Gamma Crucis team for the NASA Space Apps 2024 competition in Salvador-Bahia-Brazil.
                </p>
                <h1 className="text-xl font-bold text-white text-center">
                  Members:
                </h1>
                {credits.map((credit, index) => (
                  <p key={index} className="text-xl font-bold text-white">{credit}</p>
                ))}
                <div className="w-full h-[20%] flex flex-row">
                  <div className="relative w-full h-full">
                    <Image
                      src={Willian}
                      alt="time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-full h-full">
                  <Image
                    src={Lucca}
                    alt="Lucca"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={Augusto}
                    alt="time"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={Matheus}
                    alt="time"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={fabricio}
                    alt="time"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={Diego}
                    alt="time"
                    fill
                    className="object-contain"
                  />
                </div>
                </div>
                <div className="w-full h-[20%] flex flex-row">
                <div className="relative w-full h-full">
                  <Image
                    src={time}
                    alt="time"
                    fill
                    className="object-contain"
                  />
                </div>
                </div>
              </div>
              
            )
      }
      {handleReturn()}
    </main>
  );
}
