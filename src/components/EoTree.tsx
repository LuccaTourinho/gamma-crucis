import React from 'react'
import { useEo } from '@/lib/Eo'
import Image from 'next/image';
import Tree from '@/images/TreePixel.jpeg';
import Cut from '@/images/cut.jpeg';

export default function EoTree() {
    const {updateCuttedTrees} = useEo();
    const [cutted, setCutted] = React.useState(false);

    const handleCutTree = () => {
        setCutted(true);
        updateCuttedTrees();
      };

  return (
    <div className='relative w-full h-full'>
      {
        !cutted ? (
            <div>
                <Image
                    src={Tree}
                    alt="Tree"
                    fill
                    style={{ objectFit: 'contain' }}
                    onClick={handleCutTree}
                    className='hover:cursor-pointer'
                />
            </div>
        ) : (
            <div>
                <Image
                    src={Cut}
                    alt="Cut"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
        )
    }
    </div>
  )
}
