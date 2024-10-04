'use client';

import React from 'react'
import { useNuclear } from '@/lib/Nuclear'
import TreeNuclear from './TreeNuclear';
import Usina1 from '@/images/Usina1.png';
import Usina2 from '@/images/Usina2.png';
import Image from 'next/image';
import Florest from '@/images/termoeletrica0.png';
import Link from 'next/link';
import { Span } from 'next/dist/trace';

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
                    <span className='font-bold'>Required Demand:</span> 1,100MW {'\n'}
                    <span className='font-bold'>Production Cost:</span> ($ 5,500/KW) {'\n'}
                    <span className='font-bold'>Total Cost:</span> $ 6,050,000,000 {'\n'}{'\n'}
                    <span className='font-bold uppercase'>Impacts:</span> {'\n'}
                    * <span className='font-bold uppercase'>Deforested area:</span> 3,3 km² (1,27 mi²)
                    {'\n'}
                    * Risk of radioactive contamination due to nuclear accident{`\n`}
                    * Its plant will produce <span className='font-bold'>134,000 liters(35,399 gal) of Uranium-235 radioactive waste (670 barrels) annually</span>, which will have to be stored for <span className='font-bold'>8,000 years.</span>{`\n`}
                    CLICK HERE TO KNOW MORE
                    </p>
                </Link>
            )
        }
      
    </div>
  )
}
