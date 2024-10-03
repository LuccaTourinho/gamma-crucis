import React from 'react'
import Image from 'next/image'
import House from '@/images/casa.png'

export default function Houses() {
  return (
    <div className='flex flex-col items-center justify-around h-full w-[20%] bg-slate-300 p-2'>
      <div className='w-full h-[10%] bg-green-400 flex justify-center items-center relative'>
        <Image src={House} alt="House" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
      </div>
      <div className='w-full h-[10%] bg-green-400 flex justify-center items-center relative'>
        <Image src={House} alt="House" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
      </div>
      <div className='w-full h-[10%] bg-green-400 flex justify-center items-center relative'>
        <Image src={House} alt="House" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
      </div>
      <div className='w-full h-[10%] bg-green-400 flex justify-center items-center relative'>
        <Image src={House} alt="House" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
      </div>
      <div className='w-full h-[10%] bg-green-400 flex justify-center items-center relative'>
        <Image src={House} alt="House" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
      </div>
    </div>
  )
}
