import * as React from 'react';
import Image from 'next/image';
import Tree from '@/images/TreePixel.jpeg';
import Cut from '@/images/cut.jpeg';

interface IHydroTreeProps {
    key: number;
  index: number; 
  cuttedTrees: number;
  updateCuttedTrees: (cuttedTrees: number) => void;
  trees: number;
}

const HydroTree: React.FunctionComponent<IHydroTreeProps> = (props) => {
    const [cutted, setCutted] = React.useState(false);

    const handleCutTree = () => {
        setCutted(true);
        props.updateCuttedTrees(props.cuttedTrees + 1);
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
  );
};

export default HydroTree;
