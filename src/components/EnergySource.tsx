import React from 'react';
import Link from 'next/link';

export default function EnergySource() {
  return (
    <div className='flex flex-col items-center w-[1440px] border-2 border-black h-full'>
      <div className='flex items-center justify-center w-full h-[5%] border-b-2 border-black bg-white'>
        <h1 className='text-3xl font-bold uppercase text-black'>Choose</h1>
      </div>
      <div className='flex flex-row w-full h-full'>
        <Link href={'/energysource/termoeletrica'} className='w-[25%] h-full'>
          <div className='w-full h-full border-r-2 border-black bg-red-600 flex flex-col items-center justify-center hover:bg-red-300 transition-all duration-300'>
            <h1 className='text-xs font-bold uppercase text-black'>Thermo</h1>
          </div>
        </Link>
        <Link href={'/energysource/hidroeletrica'} className='w-[25%] h-full'>
          <div className='w-full h-full border-r-2 border-black bg-blue-500 flex flex-col items-center justify-center hover:bg-blue-300 transition-all duration-300'>
            <h1 className='text-xs font-bold uppercase text-black'>Hydro</h1>
          </div>
        </Link>
        <Link href={'/energysource/termonuclear'} className='w-[25%] h-full'>
          <div className='w-full h-full border-r-2 border-black bg-yellow-400 flex flex-col items-center justify-center hover:bg-yellow-200 transition-all duration-300'>
            <h1 className='text-xs font-bold uppercase text-black'>Nuclear</h1>
          </div>
        </Link>
        <Link href={'/energysource/eolica'} className='w-[25%] h-full'>
          <div className='w-full h-full border-black bg-green-500 flex flex-col items-center justify-center hover:bg-green-300 transition-all duration-300'>
            <h1 className='text-xs font-bold uppercase text-black'>Wind</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
