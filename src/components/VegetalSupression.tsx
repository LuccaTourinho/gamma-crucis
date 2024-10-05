'use client';

import React from 'react'
import { useSupression } from '@/lib/Supression';
import Tree from './Tree';
import Link from 'next/link';


export default function VegetalSupression() {
  const { money, tempeture, trees } = useSupression();
  const [deathValue, setDeathValue] = React.useState(0);
  const [tempetureIncrease, setTempetureIncrease] = React.useState(0);
  const [endGame, setEndGame] = React.useState(false);

  React.useEffect(() => {
    function updatedDeathValue() {
      let value = Math.floor(tempeture - 25);
      value = 10 * value;
      setDeathValue(value);
    }

    function updatedTempetureIncrease() {
      const value = tempeture - 25;
      setTempetureIncrease(value);
    }

    updatedDeathValue();
    updatedTempetureIncrease();
  }, [trees, tempeture]);

  const decimal = (number: number) => {
    return number.toFixed(2).replace(/\.00$/, '');
  }

  return (
    <div className='flex flex-col items-center w-[1440px] h-full bg-green-600 p-6 rounded-xl'>
      {
        !endGame ? (
          <>
            <div className='flex flex-col items-center w-full border-2 border-black rounded-md p-3 bg-white'>
            <h1 className='text-xs font-bold text-black uppercase'>Deforestation control</h1>
            <h1 className='text-xs font-bold text-black'>Tempeture: {tempeture}°C</h1>
            <h1 className='text-xs font-bold text-black'>Taxes Revenue: $ {money}</h1>
            <button onClick={() => setEndGame(true)} className='text-xs font-bold text-white bg-cyan-500 hover:bg-cyan-300 p-0.5'>
              Finish
            </button>
          </div>
          <div className='w-full h-full bg-white grid grid-cols-10'>
            {Array.from({ length: trees }).map((_, index) => (
                <Tree key={index}/> // Renderiza as árvores no grid
              ))}
          </div>
          </>
          
        ) : (
          <Link href={'https://earth.org/how-does-deforestation-affect-the-environment/'} className='hover:cursor-pointer' target="_blank" 
            rel="noopener noreferrer">
          <div className='w-full h-full p-2 flex flex-col items-center justify-start overflow-y-auto'>
            
            <p className="text-white whitespace-pre-wrap text-justify">
            Killed animals: {deathValue}{'\n'}
            Temperature increase: {decimal(tempetureIncrease)}°C{'\n\n'}

            The conservation of forest areas is extremely important for human {'\n'}
            and animal health and for the balance of the entire ecosystem on the planet. {'\n'}
            Deforestation causes many problems, including the formation of heat islands, {'\n'}
            which is why well-managed cities always seek to bring more trees to large urban centers.{'\n'}
            CLICK HERE TO KNOW MORE
            </p>
          </div>
          </Link>
        )
      }
    </div>
  )
}
