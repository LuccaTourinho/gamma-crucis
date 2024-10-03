'use client'

import React from 'react'
import { useSupression } from '@/lib/Supression'

export default function Trees() {
  const { trees, wood, updateTrees, updateWood, updateGameOver, gamewon, gameover } = useSupression();

  const handleTreeClick = () => {
    if (gameover || gamewon || trees === 0) return;

    updateTrees(trees - 1); 
    updateWood(wood + 1);   
    if (trees - 1 === 0) {
      updateGameOver(true); 
    }

  };

  return (
    <div className='w-full h-full hover:cursor-pointer' onClick={handleTreeClick}>
      <div className="grid grid-cols-5 gap-4 w-full h-full p-2">
        {Array.from({ length: trees }).map((_, index) => (
          <div key={index} className="flex items-center justify-center col-span-1">
            🌳
          </div>
        ))}
      </div>
    </div>
  )
}
