'use client';
import React from 'react'
import CityBlock from './CityBlock';
import { useSupression } from '@/lib/Supression';
import Image from 'next/image';
import TreePixel from '@/images/TreePixel.jpeg';

export default function Tree() {
  const { updateMoney, updateTempeture, money, tempeture } = useSupression();
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    if (!isClicked) { // Verifica se a árvore não foi clicada
      updateMoney(money + 200); // Atualiza o dinheiro
      updateTempeture(tempeture + 0.1); // Atualiza a temperatura
      setIsClicked(true); // Marca a árvore como clicada
    }
  };

  return (
    <>
    {
      isClicked ? (
        <CityBlock />
      ) : (
        <div onClick={handleClick} className='relative bg-green-400 w-full h-full hover:cursor-pointer'>
          <Image
            src={TreePixel}
            alt='Tree'
            fill
            style={{objectFit: 'contain'}}
          />
        </div>
      )
    }
    </>
  )
}
