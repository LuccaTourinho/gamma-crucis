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
        <p className="text-2xl text-white whitespace-pre-wrap text-justify">
        <span className='font-bold'>Zone potential:</span> 1,100MW ( production potential 0% above demand limit){'\n'}
        <span className='font-bold'>Required demand:</span> 1,100MW {'\n'}
        <span className='font-bold'>Production cost:</span> $1,200/KW {'\n'}
        <span className='font-bold'>Total cost for demand:</span> $1,320,000,000 {'\n'}{'\n'}
        <span className='font-bold uppercase'>Impacts:</span>{'\n'}

        •	Your project complied with the legislation and built the power plant 1.5 km (4921 ft) away from the residences, <span className='font-bold text-yellow-300'>noise pollution {'\n'}is not reaching the residences, avoiding psychological problems for residents due to noise pollution;{'\n'}</span>
        • <span className='font-bold'>Deforestation and loss of biodiversity;{'\n'}</span>
        •	<span className='font-bold'>Bird deaths from hitting the blades.{'\n'}</span>
        <span className='text-xl text-cyan-300'>CLICK HERE TO KNOW MORE {'\n\n\n'}</span>       

        </p>
        </Link>
        <Link
          href={"https://www.energysage.com/about-clean-energy/wind/pros-cons-wind-energy/"}
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full h-full hover:cursor-pointer'
        >
          <p className="text-2xl text-white whitespace-pre-wrap text-justify">
          <span className='font-bold'>BENEFITS:</span>{'\n'}
          • <span className='font-bold'>Renewable & clean source of energy;{'\n'}</span>      
          •	<span className='font-bold'>Low operating costs;{'\n'}</span>
          •	<span className='font-bold'>Efficient use of land space. {'\n'}</span> 
          <span className='text-xl text-cyan-300'>CLICK HERE TO KNOW MORE {'\n'}</span>             
        </p>
        </Link>        
        </>
        
      </div>
    </main>
  )
}