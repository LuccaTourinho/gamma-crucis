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
            <div className='relative w-full h-[5%] md:h-[25%] lg:h-[35%] xl:h-[45%] 2xl:h-[53%] flex items-center justify-center bg-yellow-950'>
              <Image src={currentImage} alt='hidroestação' fill style={{ objectFit: 'contain' }} />
            </div>
            <button className={`w-full h-[5%] p-0.5 bg-cyan-500 hover:bg-cyan-300 hover:cursor-pointer text-xs ${cuttedTrees <100 ? 'hidden' : ''}`} onClick={() => setShowFinal(true)}>
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
          <div className='w-full h-full flex flex-col bg-blue-500'>
          <Link 
            href={'https://www.eia.gov/energyexplained/hydropower/hydropower-and-the-environment.php'}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full h-full'
          >
            <div className='w-full h-full bg-blue-500 p-6 overflow-y-auto flex flex-col justify-start'>
                <p className="text-white whitespace-pre-wrap text-justify">
                <span className='font-bold'>Required Demand:</span> 1,100MW{'\n'}
                <span className='font-bold'>Construction costs:</span> ($1500/KW){'\n'}
                <span className='font-bold'>Total Cost:</span> $1,375,000,000{'\n'}
                {'\n'}
                <span className='font-bold uppercase'>Impacts:</span>{'\n'}
                * <span className='font-bold'>Deforested area:</span> 281 km²(108.4 mi²) = 39,355 football pitches;{'\n'}
                * <span className='font-bold'>Flooding of riverside communities;{'\n'}</span>
                * <span className='font-bold'>High interference in the reproductive cycle of fish;{'\n'}</span>
                * <span className='font-bold'>Loss of fauna biodiversity.{'\n'}</span>
                CLICK HERE TO KNOW MORE{'\n\n\n'}
                
                </p>
            </div>
          </Link>
          <Link 
            href={'https://www.energy.gov/eere/water/benefits-hydropower#:'}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full h-full'
          >
            <div className='w-full h-full bg-blue-500 p-6 overflow-y-auto flex flex-col justify-start'>
                <p className="text-white whitespace-pre-wrap text-justify">
                <span className='font-bold'>BENEFITS:</span>{'\n'}
                * <span className='font-bold'>Hydropower is fueled by water, making it a clean source of energy;{'\n'}</span>
                * <span className='font-bold'>Hydropower plants can generate power to the grid immediately, they provide essential backup power during major electricity outages or disruptions;{'\n'}</span>
                * <span className='font-bold'>Hydropower provides benefits beyond electricity generation by providing flood control, irrigation support, and clean drinking water.{'\n'}</span>
                CLICK HERE TO KNOW MORE{'\n\n\n'}
               </p>
            </div>
          </Link>
          </div>
          
          
        )
      }
    </div>
  )
}
