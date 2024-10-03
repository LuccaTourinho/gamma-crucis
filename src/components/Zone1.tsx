'use client';

import React from 'react'
import { useEo } from '@/lib/Eo'
import EoTree from './EoTree';
import Image from 'next/image';
import eolicaestagio1zona1 from '@/images/eolicaestagio1zona1.png';
import eolicaestagio2zona1 from '@/images/eolicaestagio2zona1.png';
import eolicaestagio3zona1 from '@/images/eolicaestagio3zona1.png';
import Link from 'next/link';


export default function Zone1() {
    const { cuttedTrees,trees } = useEo();

    const [upperTrees, setUpperTrees] = React.useState(trees / 2);
    const [lowerTrees, setLowerTrees] = React.useState(trees / 2);
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
      <div className='w-full h-[20%] flex items-center justify-center'>
        <div className='relative w-full h-full'>
        {
            cuttedTrees < 20 ? (
                <Image
                    src={eolicaestagio1zona1}
                    alt="Eolica Estagio 1 Zona 1"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            ) : (
                cuttedTrees < 40 ? (
                    <Image
                        src={eolicaestagio2zona1}
                        alt="Eolica Estagio 1 Zona 2"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                ) : (
                    <Image
                        src={eolicaestagio3zona1}
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
      <Link href={'/energysource/eolica/zone1'} className='w-full h-[10%]'>
        <button className={`w-full h-full bg-red-900 hover:bg-red-300 text-white p-0.5 hover:cursor-pointer ${!showFinal ? 'hidden' : ''}`}>
          Finish
        </button>
      </Link>
    </div>
  )
}
