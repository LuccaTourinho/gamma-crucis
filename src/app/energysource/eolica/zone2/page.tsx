import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="w-screen h-screen flex justify-center items-center p-20 bg-white">
      <div className='w-full h-full bg-green-600 p-6 overflow-y-auto flex flex-col justify-start'>
        <>
        <Link
          href={"https://www.eia.gov/energyexplained/wind/wind-energy-and-the-environment.php"}
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full h-full hover:cursor-pointer'
        >
        <p className="text-white whitespace-pre-wrap text-justify">
        <span className='font-bold'>Zone potential:</span> 1,800MW (production potential 63.6% above the demand limit){'\n'}
        <span className='font-bold'>Required demand:</span> 1,100MW {'\n'}
        <span className='font-bold'>Production cost:</span> $1,200/KW {'\n'}
        <span className='font-bold'>Total cost for demand:</span> $1,320,000,000 {'\n'}
        <span className='font-bold'>Total cost for potential zone limit:</span> $2,160,000,000{'\n'}{'\n'}
        <span className='font-bold uppercase'>Impacts:</span>{'\n'}

        •	The project complied with the legislation and built the power plant 700 meters (2296 ft) away from the residences, <span className='font-bold'>generating noise pollution of 30 decibels(equivalent a whispering), avoiding psychological problems for residents due to noise pollution;{'\n'} </span>
        •	<span className='font-bold'>This zone is on a bird migration route, there will be high bird mortality due to collisions with the blades;</span>{'\n'}
        •	<span className='font-bold'>Deforestation and loss of biodiversity.{'\n'}</span>
        CLICK HERE TO KNOW MORE
        </p>
        </Link>

        <Link
          href={"https://www.energysage.com/about-clean-energy/wind/pros-cons-wind-energy/"}
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full h-full hover:cursor-pointer'
        >
          <p className="text-white whitespace-pre-wrap text-justify">
          {'\n\n'}<span className='font-bold'>BENEFITS:</span>{'\n'}
          • <span className='font-bold'>Renewable & clean source of energy;{'\n'}</span>      
          •	<span className='font-bold'>Low operating costs;{'\n'}</span>
          •	<span className='font-bold'>Efficient use of land space. {'\n'}</span> 
          CLICK HERE TO KNOW MORE       
        </p>
        </Link>        
          
        </>
        
      </div>
    </main>
  )
}