'use client';

import React from 'react'
import Image from 'next/image';
import predio from '@/images/predio.png'

export default function CityBlock() {
  return (
    <div className='relative bg-gray-400 w-full h-full'>
      <Image
        src={predio}
        alt='predio'
        fill
        style={{objectFit: 'contain'}}
      />
    </div>
  )
}
