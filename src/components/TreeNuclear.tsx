import React from 'react'
import { useNuclear } from '@/lib/Nuclear'
import Image from 'next/image';
import Tree from '@/images/TreePixel.jpeg';
import Cut from '@/images/cut.jpeg';

export default function TreeNuclear() {
    const {updateCuttedTrees} = useNuclear();

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
