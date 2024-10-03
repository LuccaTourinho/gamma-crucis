'use client';

import Mining from '@/components/Mining'
import React from 'react'
import { MineProvider } from '@/lib/Mine';
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
    <main className='className="w-screen h-screen flex justify-center items-center p-20 bg-white'>
      {
        showGame
        ? (
          <MineProvider>
            <Mining />
          </MineProvider>
        ) : (
          <div className='flex flex-col items-center justify-center w-[1440px] bg-[#011126] h-full text-white p-6'>
            <p className='text-white whitespace-pre-wrap text-justify overflow-y-auto'>
            To diversify the city economy, {'\n'}
            the Ministry of Mines and Energy presented you with a project {'\n'} 
            to create new mines for extracting iron ore, lithium, niobium and gold. {'\n'} 
            As the manager, you must decide how many mines will be active {'\n'}
            and what their environmental monitoring levels will be. {'\n'}
            YOUR CHOICES HAVE CONSEQUENCES! {'\n'}
            </p>
            <button className='p-2 bg-[#8C0303] hover:bg-[#F23E2E] text-white rounded-md mt-10' onClick={startGame}>
              Play
            </button>
          </div>
        )
      }
      {handleReturn()}
    </main>
  )
}
