import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className='w-screen h-screen flex justify-center items-center p-20 bg-white'>
      <div className='flex flex-col items-center justify-center w-[1440px] border-2 border-black h-full text-black'>
      <Link 
            href={'https://earth.org/environmental-problems-caused-by-mining/'}
            target="_blank" 
            rel="noopener noreferrer"
            className='w-full h-full'
          >
            <div className='flex flex-col items-center justify-center w-[1440px] bg-green-600 h-full text-white p-6'>
            <p className='text-2xl text-white whitespace-pre-wrap text-justify overflow-y-auto'>
            Mining is an extremely important activity for society, after all,{'\n'}
            dozens of different metals are constantly present in our daily lives,{'\n'} 
            but it is up to government agencies to monitor how these minerals  {'\n'} 
            are extracted, as mining companies in their relentless pursuit of  {'\n'}
            profit often tend not to worry about the environmental {'\n'}
            consequences of their actions, which can directly or indirectly {'\n'}
            contaminate thousands of people who live near the mines through  {'\n'}
            untreated discarded waste. {'\n'}
            <span className='text-xl font-bold text-cyan-300'>CLICK HERE TO KNOW MORE{'\n'}</span>

            </p>
          </div>
          </Link>
      </div>
    </main>
  )
}
