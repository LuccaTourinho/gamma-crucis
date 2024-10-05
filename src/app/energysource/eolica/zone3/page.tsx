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
        <span className='font-bold'>Zone potential:</span> 1,100MW ( production potential 0% above demand limit){'\n'}
        <span className='font-bold'>Required demand:</span> 1,100MW {'\n'}
        <span className='font-bold'>Production cost:</span> $1,200/KW {'\n'}
        <span className='font-bold'>Total cost for demand:</span> $1,320,000,000 {'\n'}{'\n'}
        <span className='font-bold uppercase'>Impacts:</span>{'\n'}

        •	Your project complied with the legislation and built the power plant 1.5 km (4921 ft) away from the residences, noise pollution is not reaching the residences, avoiding psychological problems for residents due to noise pollution.{'\n'} 
        •	Deforestation and loss of biodiversity.{'\n'}
        •	Bird deaths from hitting the blades{'\n'}
        CLICK HERE TO KNOW MORE
        </p>
        </Link>
      </div>
    </main>
  )
}