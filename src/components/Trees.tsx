'use client'

import React from 'react'
import { useSupression } from '@/lib/Supression'

export default function Trees() {
  const { trees, wood} = useSupression();

  

  return (
    <div className='w-full h-full hover:cursor-pointer' >
      <div className="grid grid-cols-5 gap-4 w-full h-full p-2">
        {Array.from({ length: trees }).map((_, index) => (
          <div key={index} className="flex items-center justify-center col-span-1">
            🌳
          </div>
        ))}
      </div>
    </div>
  )
}
