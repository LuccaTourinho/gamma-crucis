'use client';

import React from 'react'
import { useHydro } from '@/lib/Hydro'
import HydroTree from './HydroTree';
import lv1 from '@/images/hidroestagio1.png';
import lv2 from '@/images/hidroestagio2.png';
import lv3 from '@/images/hidroestagio3.png';
import rio from '@/images/rio.png';
import Image from 'next/image';
import Link from 'next/link';

export default function HidroEletrica() {
  const { 
    trees,
    cuttedTrees,
    updateCuttedTrees 
  } = useHydro();

  const [currentImage, setCurrentImage] = React.useState(rio);

  const hidroLevel = [35, 70, 100];

  React.useEffect(() => {
    if (cuttedTrees < hidroLevel[0]) {
      setCurrentImage(rio);
    } else if (cuttedTrees >= hidroLevel[0] && cuttedTrees < hidroLevel[1]) {
      setCurrentImage(lv1);
    } else if (cuttedTrees >= hidroLevel[1] && cuttedTrees < hidroLevel[2]) {
      setCurrentImage(lv2);
    } else if (cuttedTrees >= hidroLevel[2]) {
      setCurrentImage(lv3);
    }
  }, [cuttedTrees]);

  const rightTrees = trees / 2;
  const leftTrees = trees / 2;

  const [showFinal, setShowFinal] = React.useState(false);


  return (
    <div className='flex items-center w-[1440px] border-2 border-black h-full'>
      {
        !showFinal ? (
          <>
          <div className='w-[40%] h-full flex flex-col items-center justify-center'>
            <div className='w-full h-full grid grid-cols-5 bg-[#00FF00] p-6 text-center'>
              {
                [...Array(leftTrees)].map((_, index) => (
                  <HydroTree key={index} index={index} cuttedTrees={cuttedTrees} updateCuttedTrees={updateCuttedTrees} trees={leftTrees}/>
                ))
              }
            </div>
            <div className={
              currentImage === rio 
                ? '' 
                : currentImage === lv1 
                ? 'w-full h-[30%] bg-blue-400' 
                : currentImage === lv2 
                ? 'w-full h-[40%] bg-blue-400' 
                : 'w-full h-[50%] bg-blue-400'
            }></div>
            <div className='w-full h-[10%] bg-yellow-950'></div>
          </div>
          <div className='w-[20%] h-full flex flex-col items-center justify-center'>
            <div className='w-full h-full bg-blue-400'></div>
            <div className='relative w-full h-[5%] md:h-[25%] lg:h-[35%] xl:h-[45%] 2xl:h-[53%] flex items-center justify-center'>
              <Image src={currentImage} alt='hidroestação' fill style={{ objectFit: 'contain' }} />
            </div>
            <button className={`w-full h-[5%] p-0.5 bg-[#8C0303] hover:bg-[#F23E2E] hover:cursor-pointer text-xs ${cuttedTrees <100 ? 'hidden' : ''}`} onClick={() => setShowFinal(true)}>
              Finish
            </button>
          </div>
          <div className='w-[40%] h-full flex flex-col items-center justify-center'>
            <div className='w-full h-full grid grid-cols-5 bg-[#00FF00] p-6 text-center'>
              {
                [...Array(rightTrees)].map((_, index) => (
                  <HydroTree key={index} index={index} cuttedTrees={cuttedTrees} updateCuttedTrees={updateCuttedTrees} trees={rightTrees}/>
                ))
              }
            </div>
            <div className={
              currentImage === rio 
                ? '' 
                : currentImage === lv1 
                ? 'w-full h-[30%] bg-blue-400' 
                : currentImage === lv2 
                ? 'w-full h-[40%] bg-blue-400' 
                : 'w-full h-[50%] bg-blue-400'
            }></div>
            <div className='w-full h-[10%] bg-yellow-950'></div>
          </div>
          </>
        ) : (
          <Link 
            href={'https://www.eia.gov/energyexplained/hydropower/hydropower-and-the-environment.php'}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full h-full'
          >
            <div className='w-full h-full bg-[#011126] p-6 overflow-y-auto flex flex-col justify-start'>
                <p className="text-white whitespace-pre-wrap text-justify">
                <span className='font-bold'>Required Demand:</span> 1,100MW{'\n'}
                <span className='font-bold'>Construction costs:</span> ($1500/KW){'\n'}
                <span className='font-bold'>Total Cost:</span> $1,375,000,000{'\n'}
                {'\n'}
                <span className='font-bold uppercase'>Impacts:</span>{'\n'}
                * <span className='font-bold'>Deforested area:</span> 281 km²(108.4 mi²) = 39,355 football pitch{'\n'}
                * Flooding of riverside communities{'\n'}
                * High interference in the reproductive cycle of fish{'\n'}
                * Loss of fauna biodiversity{'\n'}
                CLICK HERE TO KNOW MORE
                </p>
            </div>
          </Link>
        )
      }
    </div>
  )
}
