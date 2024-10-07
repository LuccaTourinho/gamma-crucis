'use client';

import React from 'react'
import Link from 'next/link';

interface IGameProps {
  title: string;
  text: string;
  direction: string;
}

const Game: React.FunctionComponent<IGameProps> = (props) => {
  return (
    <Link href={props.direction}>
      <div 
      className={`
        flex flex-col items-center justify-between p-1 
        w-[200px] h-[80px] 
        md:w-[250px] md:h-[150px]
        lg:w-[250px] lg:h-[300px]
        2xl:w-[300px] xl:h-[500px] 
        bg-cyan-500 hover:bg-cyan-300 text-white 
        rounded-md overflow-hidden hover:cursor-pointer
        hover:scale-110 transition-all duration-300
      `}>
        <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-xl font-bold uppercase'>{props.title}</h1>
          <p className='text-xl text-center'>
            {props.text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Game;

