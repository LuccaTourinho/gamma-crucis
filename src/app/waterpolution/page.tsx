'use client';

import WatterPoulution from '@/components/WatterPoulution'
import React from 'react'
import { WatterProvider } from '@/lib/Watter'
import { ArrowLeft } from "lucide-react";

export default function page() {
  const [showGame, setShowGame] = React.useState(false);

  const handleReturn = () => {
    return (
      <div onClick={reset} className="fixed bottom-5 left-5 w-[50px] h-[50px] bg-black flex items-center justify-center rounded-3xl hover:cursor-pointer">
        <ArrowLeft />
      </div>
    )
  };

  const startGame = () => {
    setShowGame(true);
  }

  const reset = () => {
    setShowGame(false);
    window.location.reload();
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      <WatterProvider>
      {
        !showGame
          ? (
            <div className='flex flex-col items-center justify-center w-[1440px] h-full bg-[#011126] p-6 rounded-xl'>
              <p className='text-white whitespace-pre-wrap text-justify'>
              Your city is going through a financial crisis at the city hall and you, {'\n'}
              as the manager, will have to decide whether or not to cut spending at the {'\n'}
              water treatment plant for the next 365 days. {'\n'}
              YOUR CHOICES HAVE CONSEQUENCES{'\n'}
              </p>
              <button onClick={startGame} className='w-[200px] h-[50px] bg-[#8C0303] hover:bg-[#F23E2E] text-white rounded-md mt-10 flex items-center justify-center'>
                Play
              </button>
            </div>
          ) : (
              <WatterPoulution />
          )
      }
      </WatterProvider> 
      {showGame && handleReturn()}
    </main>
  )
}
