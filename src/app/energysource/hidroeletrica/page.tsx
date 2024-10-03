'use client';

import HidroEletrica from '@/components/HidroEletrica'
import React from 'react'
import { HydroProvider } from '@/lib/Hydro'
import { ArrowLeft } from "lucide-react";

export default function Page() {
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
      <HydroProvider>
        <HidroEletrica/>
      </HydroProvider>
      {handleReturn()}
    </main>
  )
}
