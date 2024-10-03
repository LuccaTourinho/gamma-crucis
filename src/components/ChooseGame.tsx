import React from 'react'
import Game from './Game'

export default function ChooseGame() {
  return (
    <div className='flex flex-col items-center w-[1440px] h-full bg-[#011126] p-6 rounded-xl'>
      <h1 className='text-3xl font-bold text-white'>Choose your Game</h1>
      <p className="text-white whitespace-pre-wrap text-justify ">
      In the game you will be in the role of city mayor and {"\n"}
      you will have to make strategic decisions for the future of the city.{"\n"}
      </p>
      <div className='flex flex-col xl:flex-row items-center justify-center w-full h-full'>
        <div className='flex flex-col md:flex-row items-center justify-around w-full h-full'>
            <Game title='Sanitation' text='Management of water treatment plant operations' direction='/waterpolution'/>
            <Game title='Deforestation control' text='Managing deforestation control for city expansion' direction='/vegetalsupression'/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around h-full w-full'>
            <Game title='Energy sources' text='Power plant construction management' direction='/energysource'/>
            <Game title='Mining' text='Management of operating control and environmental inspection of mines' direction='/mining'/>
        </div>
      </div>
    </div>
  )
}
