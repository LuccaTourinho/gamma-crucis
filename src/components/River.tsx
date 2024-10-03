import React from 'react'

interface RiverProps{
  waterQuality: string;
}

export default function River({waterQuality}: RiverProps) {
  return (
    <div 
      className={`flex w-full h-full 
                  ${waterQuality == 'Very High - pH 7.4' ? 'bg-sky-400' : ''}
                  ${waterQuality == 'High - pH 7.0' ? 'bg-blue-400' : ''}
                  ${waterQuality == 'Low - pH 5.0' ? 'bg-green-900' : ''}
                  ${waterQuality == 'Worthless - pH 4.0' ? 'bg-yellow-800' : ''}
                `}>
      
    </div>
  )
}
