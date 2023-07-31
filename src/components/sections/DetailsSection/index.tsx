'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface DetailProps {
  title: string;
  subtitle: string;
}

const Detail: React.FC<DetailProps> = ({title, subtitle}) => (
  <div className='flex flex-col justify-center items-center text-center max-w-xxs'>
    <h1 className='text-4.5xl text-secondary mb-2'>
      {title}
    </h1>
    <p className='text-4.5xl text-tertiary leading-9 font-light'>
      {subtitle}
    </p>
  </div>
)

const DetailsSection: React.FC = () => {
  const [mobile, setMobile] = useState(false);

  function getScreenWidth() {
    setMobile(window.innerWidth < 640);
  }

  useEffect(() => {
    getScreenWidth();
    window.addEventListener('resize', getScreenWidth);
    return () => {
      window.removeEventListener('resize', getScreenWidth);
    };
  }, []);

  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <div className='flex justify-center items-center mb-16'>
        <Image src='/pix.webp' width={mobile ? 180 : 250} height={mobile ? 120 : 165} alt='Pix Logo' />
        <Image
          src='/cards-flags.webp'
          width={mobile ? 280 : 420}
          height={mobile ? 140 : 210}
          alt='Cards flags (Visa, Mastercard, ELO)'
        />
      </div>
      <div className='flex justify-center items-center flex-wrap w-full space-x-20'>
        <Detail title='+200' subtitle='Clientes ativos' />
        <Detail title='+145' subtitle='Usuários do aplicativo' />
        <Detail title='03' subtitle='Anos de experiência' />
      </div>
    </div>
  );
};

export default DetailsSection;
