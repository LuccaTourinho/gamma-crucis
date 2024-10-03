'use client';

import React from 'react'
import { useNuclear } from '@/lib/Nuclear'
import TreeNuclear from './TreeNuclear';
import Usina1 from '@/images/Usina1.png';
import Usina2 from '@/images/Usina2.png';
import Image from 'next/image';
import Florest from '@/images/termoeletrica0.png';
import Link from 'next/link';

export default function TermoNuclear() {
    const {
        trees,
        cuttedTrees,
    } = useNuclear();

    //const [rightTrees, setRightTrees] = React.useState(trees / 2);
    //const [leftTrees, setLeftTrees] = React.useState(trees / 2);

    const rightTrees = (trees/2);
    const leftTrees = (trees/2);
    
    const [showFinal, setShowFinal] = React.useState(false);

  return (
    <div className='flex justify-center w-[1440px] border-2 border-black h-full'>
        {
            !showFinal ? (
                <>
                    <div className='w-[20%] h-full bg-blue-500'></div>
                    <div className='w-[80%] h-full bg-green-500'>
                        <div className='flex flex-col w-full h-full'>
                            <div className='w-full h-[40%] grid grid-cols-5'>
                                {
                                    [...Array(rightTrees)].map((_, index) => (
                                        <TreeNuclear key={index} />
                                    ))
                                }
                            </div>
                            <div className='w-full h-[15%] flex flex-row'>
                                <div className='relative w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%] h-full'>
                                    {   
                                        cuttedTrees < 1 ? (
                                            <Image
                                                    src={Florest}
                                                    alt="Floresta"
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                            />
                                        ) :
                                        (
                                            cuttedTrees < 40 ? (
                                                <Image
                                                    src={Usina1}
                                                    alt="Usina 1"
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            ) : (
                                                <Image
                                                    src={Usina2}
                                                    alt="Usina 2"
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            )
                                        )
                                    }
                                </div>
                                <div className='w-[50%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[85%] h-full bg-slate-700 flex justify-around items-center'>
                                    <div className='w-[10%] h-[5px] bg-yellow-400'></div>
                                    <div className='w-[10%] h-[5px] bg-yellow-400'></div>
                                    <div className='w-[10%] h-[5px] bg-yellow-400'></div>
                                    <div className='w-[10%] h-[5px] bg-yellow-400'></div>
                                    <div className='w-[10%] h-[5px] bg-yellow-400'></div>
                                </div>
                            </div>
                            <div className={`w-full h-[5%] `}>
                                    <button className={`w-full h-full bg-red-900 p-1 hover:bg-red-300 hover:cursor-pointer ${cuttedTrees < 40 ? 'hidden' : ''}`} onClick={() => setShowFinal(true)}>
                                        Finish
                                    </button>
                            </div>
                            <div className='w-full h-[40%] grid grid-cols-5'>
                                {
                                    [...Array(leftTrees)].map((_, index) => (
                                        <TreeNuclear key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Link 
                    href={'https://www.eia.gov/energyexplained/nuclear/nuclear-power-and-the-environment.php'}
                    className='w-full h-full bg-blue-900 p-6'
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <p className='text-white whitespace-pre-wrap text-justify overflow-y-auto'>
                    Required Demand: 1,100MW {'\n'}
                    Production Cost: ($ 5,500/KW) {'\n'}
                    Total Cost: $ 6,050,000,000 {'\n'}{'\n'}
                    Impacts: {'\n'}
                    * Your project caused psychological distress to residents due to noise pollution of 80 decibels, as the wind generators were built 150 meters (492 ft) away from homes. {'\n'}
                    * Deforestation and loss of biodiversity.{`\n`}
                    * Bird deaths from hitting the blades{`\n`}
                    CLICK HERE TO KNOW MORE
                    </p>
                </Link>
            )
        }
      
    </div>
  )
}
