import React from 'react'

export default function WatterTreatment() {
  return (
    <div className='flex bg-slate-400 h-[30%]'>
      {/* Distribucao e reservatorio */}
      <div className='w-[25%] h-full bg-slate-white flex flex-col items-center'>
        <div className='w-[8px] h-[30%] bg-orange-950'>
        </div>
        <div className='w-[30px] h-[30%] bg-slate-500'>
        </div>
        <div className='w-[8px] h-[10%] bg-orange-950'>
        </div>
        <div className='w-full h-[30%] flex flex-row items-center gap-0'>
            <div className='w-full'></div>
            <div className='w-[30px] h-full bg-slate-500 '>
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='h-[8px] w-full bg-orange-950'>
                </div>
            </div>
        </div>
      </div>
      {/* Cloro fluor */}
      <div className='w-[10%] h-full flex flex-col items-center'>
        <div className='w-[8px] h-[70%] bg-orange-950 items-center'>
        </div>
        <div className='w-full h-[30%] bg-slate-500'>
        </div>
      </div>
      {/* Filtrador/decantacao/floculacao */}
      <div className='w-[25%] h-full flex flex-col items-center'>
        <div className='w-[8px] h-[20%] bg-orange-950'>
        </div>
        <div className='w-[40px] h-full bg-orange-300'>
        </div>
        <div className='w-[8px] h-[20%] bg-orange-950'>
        </div>
      </div>
      {/* sulfato de aluminio, cal e doro */}
      <div className='w-[25%] h-full flex flex-col items-start justify-center '>
        <div className='w-full h-full'>
        </div>
        <div className='flex w-full h-[30px] items-center'>
            <div className='w-[20px] h-full bg-slate-500'>
            </div>
            <div className='w-full h-[8px] bg-orange-950'>
            </div>
        </div>
        <div className='w-[8px] h-full bg-orange-950'>
        </div>
      </div>
      <div className='w-[15%] h-full flex justify-center items-center'>
        <div className='w-full h-[8px] bg-orange-950'>

        </div>
      </div>
    </div>
  )
}
