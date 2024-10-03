'use client';

import EnergySource from '@/components/EnergySource'
import React from 'react'
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const [showGame, setShowGame] = React.useState(false);

  const startGame = () => {
    setShowGame(true);
  }


  const handleReturn = () => {
    return (
      <div onClick={reset} className="fixed bottom-5 left-5 w-[50px] h-[50px] bg-black flex items-center justify-center rounded-3xl hover:cursor-pointer">
        <ArrowLeft />
      </div>
    )
  };

  const reset = () => {
    setShowGame(false);
    window.location.reload();
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      {
        showGame
          ? (
            <EnergySource />
          )
          : (
            <div className='flex flex-col items-center justify-center w-[1440px] h-full bg-[#011126] p-6 rounded-xl'>
              <p className='text-white whitespace-pre-wrap text-justify'>
              Due to the growth of your city, current power plants will soon be unable to meet the emerging demand. The Ministry of Mines and Energy has presented you with these four proposals, each of which has its own benefits and drawbacks. YOUR CHOICES HAVE CONSEQUENCES !
              </p>
              <button onClick={startGame} className='w-[200px] h-[50px] bg-[#8C0303] hover:bg-[#F23E2E] text-white rounded-md mt-10 flex items-center justify-center'>
                Play
              </button>
            </div>
          )
      }
      {handleReturn()}
    </main>
  )
}
