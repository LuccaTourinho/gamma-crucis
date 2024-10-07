'use client';

import React from 'react'
import { useEo } from '@/lib/Eo';
import Zone1 from './Zone1';
import Zone2 from './Zone2';
import Zone3 from './Zone3';

export default function Eolica() {
    const {  zone1, zone2, zone3, updateZ1, updateZ2, updateZ3 } = useEo()
    const [zoneChoosen, setZoneChoosen] = React.useState(false);

    const handleZone1Click = () => {
        if(!zoneChoosen){
            updateZ1();
            setZoneChoosen(true);
        }
    }

    const handleZone2Click = () => {
        if(!zoneChoosen){
            updateZ2();
            setZoneChoosen(true);
        }
    }

    const handleZone3Click = () => {
        if(!zoneChoosen){
            updateZ3();
            setZoneChoosen(true);
        }
    }

  return (
    <div className='flex items-center justify-center w-[1440px] border-2 border-black h-full'>
      <div className='flex flex-col items-center justify-around w-[10%] h-full bg-slate-700'>
        <div className='w-[4px] h-[10%] bg-yellow-400'></div>
        <div className='w-[4px] h-[10%] bg-yellow-400'></div>
        <div className='w-[4px] h-[10%] bg-yellow-400'></div>
        <div className='w-[4px] h-[10%] bg-yellow-400'></div>
      </div>
      <div className='flex flex-row items-center justify-center w-[90%] h-full'>
        <div className='w-[40%] h-full overflow-hidden'>
            {
                !zone1 ? (
                    <div
                        className='w-full h-full flex flex-col items-center justify-center hover:cursor-pointer text-black bg-green-500 hover:bg-green-300 transition-all duration-300 '
                        onClick={handleZone1Click}
                    >
                        <h1 className='text-4xl'>Zone 1</h1>
                        <p><span className='text-2xl'>Wind Intensity: High</span></p>
                    </div>
                ) : (
                    <Zone1 />
                )
            }
        </div>
        <div className='w-[30%] h-full'>
            {
                !zone2 ? (
                    <div
                        className='w-full h-full flex flex-col items-center justify-center hover:cursor-pointer text-black bg-green-500 hover:bg-green-300 transition-all duration-300 '
                        onClick={handleZone2Click}
                    >
                        <h1 className='text-4xl'>Zone 2</h1>
                        <p><span className='text-2xl'>Wind Intensity: Medium</span></p>
                    </div>
                ) : (
                    <Zone2 />
                )
            }
        </div>
        <div className='w-[30%] h-full'>
            {
                !zone3 ? (
                    <div
                        className='w-full h-full flex flex-col items-center justify-center hover:cursor-pointer text-black bg-green-500 hover:bg-green-300 transition-all duration-300'
                        onClick={handleZone3Click}
                    >
                        <h1 className='text-4xl'>Zone 3</h1>
                        <p><span className='text-2xl'>Wind Intensity: Low</span></p>
                    </div>
                ) : (
                    <Zone3 />
                )
            }
        </div>
      </div>
    </div>
  )
}
