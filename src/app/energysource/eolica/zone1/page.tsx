import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      <div className='w-full h-full bg-[#011126] p-6 overflow-y-auto flex flex-col justify-start'>
        <Link
          href={"https://www.eia.gov/energyexplained/wind/wind-energy-and-the-environment.php"}
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full h-full hover:cursor-pointer'
        >
        <p className="text-white whitespace-pre-wrap text-justify">
        Zone potential: 2,500MW (production potential 127.2% above the demand limit){'\n'}
        Required demand: 1,100MW {'\n'}
        Production cost: $1,200/KW {'\n'}
        Total cost for demand: $1,320,000,000 {'\n'}
        Total cost for potential zone limit: $ 3,000,000,000 {'\n'}{'\n'}
        Impacts:{'\n'}

        •	Your project caused psychological distress to residents due to noise pollution of 80 decibels, as the wind generators were built 150 meters (492 ft) away from homes. {'\n'} 
        •	Deforestation and loss of biodiversity. {'\n'}
        •	Bird deaths from hitting the blades {'\n'}
        CLECK HERE TO KNOW MORE
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