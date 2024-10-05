import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      <div className='w-full h-full bg-green-600 p-6 overflow-y-auto flex flex-col justify-start'>
        <Link
          href={"https://www.eia.gov/energyexplained/wind/wind-energy-and-the-environment.php"}
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full h-full hover:cursor-pointer'
        >
        <p className="text-white whitespace-pre-wrap text-justify">
        <span className='font-bold'>Zone potential:</span> 2,500MW (production potential 127.2% above the demand limit){'\n'}
        <span className='font-bold'>Required demand:</span> 1,100MW {'\n'}
        <span className='font-bold'>Production cost:</span> $1,200/KW {'\n'}
        <span className='font-bold'>Total cost for demand:</span> $1,320,000,000 {'\n'}
        <span className='font-bold'>Total cost for potential zone limit:</span> $ 3,000,000,000 {'\n'}{'\n'}
        <span className='font-bold uppercase'>Impacts:</span>{'\n'}

        •	Your project caused <span className='font-bold'>psychological distress</span> to residents due to noise pollution of <span className='font-bold'>80 decibels (equivalent a hairdryer noise)</span>, as the wind generators were built 150 meters (492 ft) away from homes; {'\n'} 
        •	<span className='font-bold'>Deforestation and loss of biodiversity;{'\n'}</span>
        •	<span className='font-bold'>Bird deaths from hitting the blades. {'\n'}</span>
        CLICK HERE TO KNOW MORE
        </p>
        </Link>
        <Link href={"https://www.youtube.com/watch?v=0iCo_t9pY6g"}
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full h-full hover:cursor-pointer text-white'>
          SEE VIDEO(Portuguese language)
        </Link>
      </div>
    </main>
  )
}