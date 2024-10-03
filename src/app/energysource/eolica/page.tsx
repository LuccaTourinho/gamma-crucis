'use client';

import Eolica from '@/components/Eolica'
import React from 'react'
import { EoProvider } from '@/lib/Eo'
import { ArrowLeft } from "lucide-react";

export default function page() {
  const handleReturn = () => {
    return (
      <div onClick={reset} className="fixed bottom-5 left-5 w-[50px] h-[50px] bg-black flex items-center justify-center rounded-3xl hover:cursor-pointer">
        <ArrowLeft />
      </div>
    )
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      <EoProvider>
      <Eolica />
      </EoProvider>
      {handleReturn()}
    </main>
  )
}
