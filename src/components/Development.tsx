'use client';

import React, { useEffect } from 'react'
import { useSupression } from '@/lib/Supression';

export default function Development() {
  const {wood, updateGameWon} = useSupression();

  useEffect(() => {
    if (wood >= 380) {
      updateGameWon(true);
    }
    console.log(wood);
  }, [wood]);


  return (
    <div className='w-[20%] h-full flex flex-col justify-around items-center bg-slate-300'>
      <div>
          {wood > 20 && wood < 30 ? '🏠' : wood >= 30 && wood < 40 ? '🏘️' : wood >= 40 ? '🏢' : ''}
      </div>
      <div>
          {wood > 60 && wood < 70 ? '🏠' : wood >= 70 && wood < 80 ? '🏘️' : wood >= 80 ? '🏢' : ''}
      </div>
      <div>
          {wood > 100 && wood < 110 ? '🏠' : wood >= 120 && wood < 130 ? '🏘️' : wood >= 130 ? '🏢' : ''}
      </div>
      <div>
        {wood > 160 && wood < 170 ? '🏠' : wood >= 170 && wood < 180 ? '🏘️' : wood >= 180 ? '🏢' : ''}
      </div>
      <div>
          {wood > 210 && wood < 220 ? '🏠' : wood >= 220 && wood < 230 ? '🏘️' : wood >= 230 ? '🏢' : ''}
      </div>
      <div>
        {wood > 260 && wood < 270 ? '🏠' : wood >= 270 && wood < 280 ? '🏘️' : wood >= 280 ? '🏢' : ''}
      </div>
      <div>
        {wood > 310 && wood < 320 ? '🏠' : wood >= 320 && wood < 330 ? '🏘️' : wood >= 330 ? '🏢' : ''}
      </div>
      <div>
        {wood > 360 && wood < 370 ? '🏠' : wood >= 370 && wood < 380 ? '🏘️' : wood >= 380 ? '🏢' : ''}
      </div>
    </div>
  )
}
