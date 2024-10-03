import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import disaster from '@/images/disaster.png';

export default function Page() {
  return (
    <main className='w-screen h-screen flex justify-center items-center p-20 bg-white'>
      <div className='flex flex-col items-center justify-center w-[1440px] border-2 border-black h-full text-white bg-blue-900'>
      <div className={`flex flex-col items-center justify-start h-full text-center `}>
            <div className='flex flex-col items-center justify-center w-full h-[20%]'>
                <h1 className='text-xs font-bold'>Warning!</h1>
                <p className={`text-xs `}>
                Due to the lack of oversight, one of the mines experienced a dam breach of tailings, which led to {'\n'}
                the complete contamination of the São Francisco River and resulted in the deaths of 30,000 people{'\n'}
                and the mass mortality of numerous species of wildlife.{'\n'}
                </p>
            </div>
            <div className='w-full h-[20%] '>
            <Link href={'/mining/finish'} className='p-1 bg-[#8C0303] hover:bg-[#F23E2E] hover:cursor-pointer text-xs text-white'>
              Finish
            </Link>
            </div>
            <div className='w-full h-[60%]'>
            <div className='relative w-full h-full '>
              <Image 
                src={disaster}
                alt='disaster'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            </div>
       </div>
      </div>
    </main>
  )
}
