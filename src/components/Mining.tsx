import React, { useEffect } from 'react';
import { useMine } from '@/lib/Mine';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface metalType{
  value: number;
  on: boolean;
}

export default function Mining() {
  const { 
    days, 
    totalTaxes,
    contamination,
    naturalDisaster,
    metalActives,
    updateTributes,
    gameOver,
    updateMetalActives,
    updateNaturalDisaster,
    gameOn,
    updateContamination
  } = useMine();

  const [iron, setIron] = React.useState<metalType>({value: 50000, on: false});
  const [lithium, setLithium] = React.useState<metalType>({value: 90000, on: false});
  const [niobio, setNiobio] = React.useState<metalType>({value: 150000, on: false});
  const [gold, setGold] = React.useState<metalType>({value: 200000, on: false});
  const [showFinal, setShowFinal] = React.useState(false);

  const [selectedNivel, setSelectedNivel] = React.useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    if (!gameOver && !gameOn) {
      let value = 0;
      const reduce = selectedNivel * 10000 * metalActives;

      if(iron.on){
        value+=iron.value;
      }

      if(lithium.on){
        value+=lithium.value;
      }

      if(niobio.on){
        value+=niobio.value;
      }

      if(gold.on){
        value+=gold.value;
      }

      value -= reduce;

      updateTributes(value);
    }
  }, [days]);

  useEffect(() => {
    let value = 0;

    if(iron.on){
      value+=1;
    }

    if(lithium.on){
      value+=2;
    }

    if(niobio.on){
      value+=3;
    }

    if(gold.on){
      value+=4;
    }

    value = (value - (selectedNivel * 2))/2;
    if(value < 0){
      value = 0;
    }
    updateNaturalDisaster(value);
  }, [iron, lithium, niobio, gold, selectedNivel]);

  useEffect(() => {
    function changeContamination() {
      if(iron.on || lithium.on || niobio.on || gold.on){
        let value = 0;

        value = metalActives - (selectedNivel -1);

        if(value < 0){
          value = 0;
        }
        updateContamination(value); 
      }
    }

    function defineFinal(){
      if(days>=365){
        setShowFinal(true);
      }
    }

    function handleGameOver(){
      if(gameOver){
        router.push('/mining/gameover');
      }
    }

    console.log(gameOver);
    changeContamination();
    defineFinal();
    handleGameOver();
  }, [days]);

  const updateIron = () => {
    if (!iron.on) {
      setIron({value: 50000, on: true});
      updateMetalActives(1);
    } else {
      setIron({value: 50000, on: false});
      updateMetalActives(-1);
    }
  }

  const updateLithium = () => {
    if (!lithium.on) {
      setLithium({value: 90000, on: true});
      updateMetalActives(1);
    } else {
      setLithium({value: 90000, on: false});
      updateMetalActives(-1);
    }
  }

  const updateNiobio = () => {
    if (!niobio.on) {
      setNiobio({value: 150000, on: true});
      updateMetalActives(1);
    } else {
      setNiobio({value: 150000, on: false});
      updateMetalActives(-1);
    }
  }

  const updateGold = () => {
    if (!gold.on) {
      setGold({value: 200000, on: true});
      updateMetalActives(1);
    } else {
      setGold({value: 200000, on: false});
      updateMetalActives(-1);
    }
  }

  const selectNivel = (nivel: number) => {
    setSelectedNivel(nivel);
  };

  return (
    <div className='flex flex-col xl:flex-row items-center justify-center w-[1440px] border-2 border-black h-full text-black'>
      <div className='flex flex-row xl:flex-col items-center justify-center h-[20%] w-full xl:w-[20%] xl:h-full'>
        <div 
          className={`w-full h-full bg-orange-500 flex flex-col items-center justify-center hover:cursor-pointer`} 
          onClick={updateIron}
        >
            <p className='text-xs'>Taxes gain:</p>
            <p className='text-xs'>$ 50.000</p>
            <h1 className='text-xl font-bold'>Iron</h1>
            <p className='text-xs'>{iron.on ? 'On' : 'Off'}</p>
        </div>
        <div 
          className={`w-full h-full bg-slate-400 flex flex-col items-center justify-center hover:cursor-pointer`}
          onClick={updateLithium}
        >
          <p className='text-xs'>Taxes gain:</p>
          <p className='text-xs'>$ 90.000</p>
          <h1 className='text-xl font-bold'>Lithium</h1>
          <p className='text-xs'>{lithium.on ? 'On' : 'Off'}</p>
        </div>
        <div 
          className='w-full h-full bg-blue-500 flex flex-col items-center justify-center hover:cursor-pointer'
          onClick={updateNiobio}  
        >
          <p className='text-xs'>Taxes gain:</p>
          <p className='text-xs'>$ 150.000</p>
          <h1 className='text-xl font-bold'>Niobium</h1>
          <p className='text-xs'>{niobio.on ? 'On' : 'Off'}</p>
        </div>
        <div 
          className='w-full h-full bg-yellow-400 flex flex-col items-center justify-center hover:cursor-pointer'
          onClick={updateGold}  
        >
          <p className='text-xs'>Taxes gain:</p>
          <p className='text-xs'>$ 200.000</p>
          <h1 className='text-xl font-bold'>Gold</h1>
          <p className='text-xs'>{gold.on ? 'On' : 'Off'}</p>
        </div>
      </div>
      <div className='w-full h-full bg-cyan-300 flex flex-col items-center justify-around px-0.5'>
        <p className='text-lg font-bold uppercase'>Mining Control</p>
        <p>DAY: {days}</p>
        <p>TOTAL TAXES REVENUE: $ {totalTaxes}</p>
        <p>NUMBER OF CONTAMINED BY TOXIC METALS: {contamination}</p>
        <p>PROBABILITY OF ENVIRONMENTAL DISASTER: {naturalDisaster}%</p>
        <p>ENVIRONMENT FISCALIZATION:</p>
        <div className='flex flex-row h-[5%] w-full'>
          <div className='w-full h-full '>
              <div className='text-xs w-full h-full flex items-center justify-center  border-2 border-black'>Level</div>
              <div className='text-xs w-full h-full flex items-center justify-center border-2 border-black'>$</div>
          </div>
          {[0, 1, 2, 3, 4, 5].map((nivel) => (
            <div key={nivel} className='w-full h-full'>
              <div 
                className={`text-xs w-full h-full flex items-center justify-center cursor-pointer border-2 border-black ${selectedNivel === nivel ? 'bg-green-500' : 'bg-white'}`}
                onClick={() => selectNivel(nivel)}
              >
                {nivel}
              </div>
              <div className={`text-xs w-full h-full flex items-center justify-center border-2 border-black ${selectedNivel === nivel ? 'bg-green-500' : 'bg-white'}`}>
                {nivel === 0 ? '0' : `- ${nivel * 10000}`}
              </div>
            </div>
          ))}
        </div>
        <Link href={'/mining/finish'} className={`h-[5%] w-full bg-cyan-500 hover:bg-cyan-300 hover:cursor-pointer p-0.5 text-center text-white ${showFinal ? 'block' : 'hidden'}`}>
          Finish
        </Link>
      </div>
    </div>
  )
}
