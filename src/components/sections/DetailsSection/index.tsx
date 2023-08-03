import Image from 'next/image';
import React from 'react';

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
  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <div className='flex justify-center items-center mb-16 max-md:flex-col max-md:mb-8'>
        <Image src='/pix.webp' width={250} height={165} alt='Pix Logo' />
        <Image
          src='/cards-flags.webp'
          width={420}
          height={210}
          alt='Cards flags (Visa, Mastercard, ELO)'
        />
      </div>
      <div className='flex justify-center items-center flex-wrap w-full space-x-20 max-lg:space-x-0 max-lg:justify-around max-sm:space-y-10'>
        <Detail title='+200' subtitle='Clientes ativos' />
        <Detail title='+145' subtitle='Usuários do aplicativo' />
        <Detail title='03' subtitle='Anos de experiência' />
      </div>
    </div>
  );
};

export default DetailsSection;
