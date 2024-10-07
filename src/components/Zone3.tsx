'use client';

import React from 'react'
import { useEo } from '@/lib/Eo'
import EoTree from './EoTree';
import Image from 'next/image';
import eolicaestagio1zona3 from '@/images/eolicaestagio1zona3.png';
import eolicaestagio2zona3 from '@/images/eolicaestagio2zona3.png';
import eolicaestagio3zona3 from '@/images/eolicaestagio3zona3.png';
import Link from 'next/link';

export default function Zone3() {
    const { cuttedTrees,trees } = useEo();

    //const [upperTrees, setUpperTrees] = React.useState(trees / 2);
    //const [lowerTrees, setLowerTrees] = React.useState(trees / 2);

    const upperTrees = trees/2;
    const lowerTrees = trees/2;
    
    const [showFinal, setShowFinal] = React.useState(false);

  React.useEffect(() => {
    if (cuttedTrees >= 40) {
      setShowFinal(true);
    }
  }, [cuttedTrees]);

  return (
    <div className='flex flex-col justify-center items-center w-full h-full bg-green-500'>
      <div className='w-full h-[35%] grid grid-cols-5'>
        {
          [...Array(upperTrees)].map((_, index) => (
            <EoTree key={index} />
          ))
        }
      </div>
      <div className='w-full h-[35%] flex items-center justify-center'>
        <div className='relative w-full h-full'>
        {
            cuttedTrees < 20 ? (
                <Image
                    src={eolicaestagio1zona3}
                    alt="Eolica Estagio 1 Zona 1"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            ) : (
                cuttedTrees < 40 ? (
                    <Image
                        src={eolicaestagio2zona3}
                        alt="Eolica Estagio 1 Zona 2"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                ) : (
                    <Image
                        src={eolicaestagio3zona3}
                        alt="Eolica Estagio 1 Zona 3"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                )
            )
        }
        </div>
      </div>
      <div className='w-full h-[35%] grid grid-cols-5'>
        {
          [...Array(lowerTrees)].map((_, index) => (
            <EoTree key={index} />
          ))
        }
      </div>
      <Link href={'/energysource/eolica/zone3'} className='w-full h-[10%]'>
        <button className={`text-2xl w-full h-full bg-cyan-500 hover:bg-cyan-300 text-white p-0.5 hover:cursor-pointer ${!showFinal ? 'hidden' : ''}`}>
          Finish
        </button>
      </Link>
    </div>
  )
}
