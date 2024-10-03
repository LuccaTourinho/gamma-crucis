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
        Zone potential: 1,100MW ( production potential 0% above demand limit){'\n'}
        Required demand: 1,100MW {'\n'}
        Production cost: $1,200/KW {'\n'}
        Total cost for demand: $1,320,000,000 {'\n'}{'\n'}
        Impacts:{'\n'}

        •	Your project complied with the legislation and built the power plant 1.5 km (4921 ft) away from the residences, noise pollution is not reaching the residences, avoiding psychological problems for residents due to noise pollution.{'\n'} 
        •	Deforestation and loss of biodiversity.{'\n'}
        •	Bird deaths from hitting the blades{'\n'}
        CLECK HERE TO KNOW MORE
        </p>
        </Link>
      </div>
    </main>
  )
}