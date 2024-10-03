'use client';

import TermoEletrica from '@/components/TermoEletrica';
import React from 'react'
import { NuclearProvider } from '@/lib/Nuclear';

export default function page() {
  return (
    <main className='className="w-screen h-screen flex justify-center items-center p-20 bg-white'>
        <NuclearProvider>
        <TermoEletrica/>
        </NuclearProvider>
    </main>
  )
}
