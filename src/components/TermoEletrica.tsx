'use client';

import React from 'react'
import TermoTree from './TermoTree';
import { useNuclear } from '@/lib/Nuclear';
import Image from 'next/image';
import termoeletrica0 from '@/images/termoeletrica0.png';
import termoeletrica1 from '@/images/termoeletrica1.png';
import termoeletrica2 from '@/images/termoeletrica2.png';
import termoeletrica3 from '@/images/Termoeletrica3.png';
import Link from 'next/link';

export default function TermoEletrica() {
    const { trees, cuttedTrees } = useNuclear();
    const [showFinal, setShowFinal] = React.useState(false);

  return (
    <div className='flex items-center justify-center w-[1440px] h-full bg-green-400 rounded-xl'>
        {
            !showFinal ? (
                <>
                    <div className='w-[40%] h-full grid grid-cols-4 text-center p-6'>
                        {
                            [...Array(trees)].map((_, index) => (
                                <TermoTree key={index} />
                            ))
                        }
                    </div>
                    <div className='flex flex-col items-center justify-center w-[20%] h-full'>
                        {
                            cuttedTrees >= 80 ? (
                                <button onClick={() => setShowFinal(true)} className='w-full h-[5%] p-0.5 bg-[#8C0303] hover:bg-[#F23E2E] hover:cursor-pointer text-xs'>
                                    Finish
                                </button>
                            ) : (
                                <>
                                </>
                            )
                        }
                        <div className='relative w-full h-[10%] sm:h-[15%] md:h-[20%] lg:h-[25%] xl:h-[30%] 2xl:h-[35%]'>
                            { 
                                cuttedTrees < 1 ? (
                                    <Image
                                    src={termoeletrica0}
                                    alt="Termo-eletrica 0"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    />
                                ) : (
                                    cuttedTrees < 30 ? (
                                        <Image
                                            src={termoeletrica1}
                                            alt="Termo-eletrica 1"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    ) : (
                                        cuttedTrees < 80 ? (
                                            <Image
                                                src={termoeletrica2}
                                                alt="Termo-eletrica 2"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        ) : (
                                            <Image
                                                src={termoeletrica3}
                                                alt="Termo-eletrica 3"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        )
                                    )
                                )
                            }
                        </div>
                        <div className='w-full h-[85%] sm:h-[80%] md:h-[75%] lg:h-[70%] xl:h-[65%] 2xl:h-[60%] bg-slate-900 flex flex-col items-center justify-around'>
                            <div className='w-[10px] h-[40px] bg-yellow-400'></div>
                            <div className='w-[10px] h-[40px] bg-yellow-400'></div>
                            <div className='w-[10px] h-[40px] bg-yellow-400'></div>
                        </div>
                    </div>
                    <div className='w-[40%] h-full grid grid-cols-4 text-center p-6'>
                        {
                            [...Array(trees)].map((_, index) => (
                                <TermoTree key={index} />
                            ))
                        }
                    </div>
                </>
            ) : (
                <Link 
                    href={'https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-016-4008-7'}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='w-full h-full'
                >
                    <div className='w-full h-full bg-[#011126] p-6 overflow-y-auto flex flex-col justify-start'>
                    <p className="text-white whitespace-pre-wrap text-justify">
                    Required Demand: 1,100MW{'\n'}
                    Production Cost: ($812/KW){'\n'}
                    Total Cost: $893,200,000{'\n'}
                    {'\n'}
                    Impacts:{'\n'}
                    * Deforested forest area: 1,20 km² (0,46 mi²){'\n'}
                    * The plant will emit 530.2 tons of polluting gases per hour, such as Carbon Dioxide (CO2), Carbon Monoxide (CO) and Nitrogen Oxides.{'\n'}
                    * Respiratory problems in the population due to the gases.{'\n'}
                    *The gases emitted will come into contact with water in the atmosphere, thus leading to the phenomenon of acid rain {'\n'}
                    </p>
                </div>
                </Link>
            )
        }
        
    </div>
  )
}
