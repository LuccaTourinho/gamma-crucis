import React from 'react'
import City from './City'
import River from './River'
import WatterTreatment from './WatterTreatment'
import { useWatter } from '@/lib/Watter'
import Link from 'next/link'


export default function WatterPoulution() {
  const [waterQuality, setWaterQuality] = React.useState<string>('Very High - pH 7.4');
  const { 
    on, updateOn, 
    gameover, 
    money, updateMoney, 
    quality, updateQuality,
    death,  
    days, daysWithOutTreatment } = useWatter()
    const [daysTreatment, setDaysTreatment] = React.useState<number>(0);
    const [showMessage, setShowMessage] = React.useState<boolean>(false);
    const [messageTime, setMessageTime] = React.useState<number>(0);

    React.useEffect(() => {
      if (quality < 4) {
        setWaterQuality('Worthless - pH 4.0');
      } else if (quality >= 4 && quality < 6) {
        setWaterQuality('Low - pH 5.0');
      } else if (quality >= 6 && quality < 9) {
        setWaterQuality('High - pH 7.0');
      } else if (quality >= 9) {
        setWaterQuality('Very High - pH 7.4');
      }
    }, [quality]);

    React.useEffect(() => {
      if(!on && (quality > 0)){
        updateQuality(quality - 1);
      }

      if(on && (quality < 10)){
        updateQuality(quality + 1);
      }

      if(on){
        setDaysTreatment(daysTreatment + 1);
        if(daysTreatment == 30){
          setShowMessage(true);
          setDaysTreatment(0);
          updateMoney(money + 40000);
          setMessageTime(5);
        }
      }else{
        setDaysTreatment(0);
        setShowMessage(false);
      }

      if(messageTime > 0){
        setMessageTime(messageTime - 1);
      }

    }, [days]);

    React.useEffect(() => {
      if (messageTime == 0) {
        setShowMessage(false);
      }
    }, [messageTime]);

    const handleToggleOn = () => {
      updateOn(!on);  // Alterna entre true e false
    };

  return (
    <div className='flex flex-col items-center w-[1440px] h-full bg-[#011126] p-6 rounded-xl'>
      {
        !gameover ? (
          <>
          <div className='flex flex-col items-center w-full p-3'>
            <h1 className='text-xs font-bold text-white'>Sanitation</h1>
            <h1 className='text-xs font-bold text-white'>Money: $ {money}</h1>
            <h1 className='text-xs font-bold text-white'>Water Quality: {waterQuality}</h1>
            <h1 className='text-xs font-bold text-white'>Cases of leptospirosis and cholera: {death}</h1>
            <h1 className='text-xs font-bold text-white'>Days: {days}</h1>
            <h1 className='text-xs font-bold text-white'>Days without treatment: {daysWithOutTreatment}</h1>
            <p className={`text-xs font-bold text-white ${showMessage ? 'bold' : 'hidden'}`}>
            Congratulations: You haveve earned a $40,000.00 bonus for saving on healthcare costs after leaving your sewage treatment plant on for 30 consecutive days.
            </p>
            <button 
              onClick={handleToggleOn}  // Chama a função que alterna `on`
              className={`text-sm font-bold text-white p-2 rounded-md transition-all duration-300 
                ${on ? 'bg-red-600 hover:scale-110' : 'bg-green-600 hover:scale-110'}`}>
              {on ? 'Turn Off' : 'Turn Onn'}
            </button>
          </div>
          <div className='flex w-full h-full'>
            <div className='flex flex-col h-full w-[80%]'>
                <City/>
                <WatterTreatment/>
                
            </div>
            <div className='flex h-full w-[20%]'>
                <River waterQuality={waterQuality}/>
            </div>
          </div>
          </>
        ) : (
          <Link 
            href={"https://www.who.int/news-room/fact-sheets/detail/sanitation"}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <p className='text-white whitespace-pre-wrap text-justify overflow-y-auto'>
            Sanitation is extremely important for environmental conservation. {'\n'}
            Water sources are essential for us to have a good quality of life. {'\n'}
            Through them, we get water to drink and use in our main daily activities. {'\n'}
            As they serve as sources of fresh water in Brazil, they need to be preserved, {'\n'}
            since this resource is scarce and, despite being renewable, is at risk of running out.{'\n'}
            However, many of them become polluted, generating environmental impacts for the entire {'\n'}
            ecosystem of that river or lake. This happens due to the discharge of untreated sewage, {'\n'}
            generated by human activities. The lack of investment in basic sanitation has put Brazil {'\n'}
            in a critical situation regarding this issue, with more than half of the sewage generated {'\n'}
            by the population untreated.{'\n'}
            <span className='uppercase'>Click here to know more.</span>
          </p>
          </Link>
        )
      }
      
    </div>
  )
}
