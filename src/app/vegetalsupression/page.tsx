'use client';

import VegetalSupression from '@/components/VegetalSupression'
import React from 'react'
import { SupressionProvider } from '@/lib/Supression'
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  const [showGame, setShowGame] = React.useState(false);


  const startGame = () => {
    setShowGame(true);
  }

  const reset = () => {
    setShowGame(false);
    window.location.reload();
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      <SupressionProvider>
        {
          !showGame
          ? (
            <div className='flex flex-col items-center justify-center w-[1440px] h-full bg-green-600 p-6 rounded-xl'>
              <p className='text-2xl text-white whitespace-pre-wrap text-justify'>
              Your city is experiencing an economic boom and many{'\n'}
              construction companies are planning to build condominiums {'\n'}
              where there are currently forests, some of which are conservation {'\n'}
              areas. As a manager, you will have to decide how many buildings there will be{'\n'}
              <span className='font-bold text-yellow-300'>YOUR CHOICES HAVE CONSEQUENCES !{'\n'}</span>
              </p>
              <button onClick={startGame} className='w-[200px] h-[50px] bg-cyan-500 hover:bg-cyan-300 text-2xl text-white rounded-md mt-10 flex items-center justify-center'>
                Play
              </button>
            </div>
          ) : (
            <VegetalSupression />
          )
        }
      </SupressionProvider>
      <div onClick={reset} className="fixed bottom-5 left-5 w-[50px] h-[50px] bg-black flex items-center justify-center rounded-3xl hover:cursor-pointer">
        <ArrowLeft />
      </div>
    </main>
  )
}
