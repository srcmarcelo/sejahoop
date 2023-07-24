import Image from 'next/image';
import React from 'react';

interface DonwloadButtonProps {
  src: string;
  name: string;
  label: string;
  size: number;
  style?: string;
}

const DonwloadButton: React.FC<DonwloadButtonProps> = ({
  src,
  name,
  label,
  size,
  style,
}) => {
  return (
    <div className={`w-40 h-14 py-1 px-2 rounded-md bg-black flex justify-center items-center space-x-2 ${style}`}>
      <div>
        <Image src={src} alt={`Available on ${name}`} height={size} width={size} />
      </div>
      <div className='flex flex-col flex-1 text-left'>
        <div className='text-white text-xxs'>{label}</div>
        <div className='text-white text-lg font-semibold'>{name}</div>
      </div>
    </div>
  );
};

export default DonwloadButton;
