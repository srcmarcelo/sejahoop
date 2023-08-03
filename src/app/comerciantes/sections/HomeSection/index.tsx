import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <div className='flex justify-center items-end flex-1 h-screen pt-20'>
      <Image
        src='/payment.jpg'
        alt='Home Background'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className='opacity-10 pt-24'
      />

      <div className='flex justify-center items-center flex-col text-left w-full h-full px-4 bg-tertiary'>
        <div className='max-w-3xl'>
          <h1 className='text-6xl text-white font-semibold mx-auto mb-10 z-10 max-sm:text-4xl max-sm:mb-4'>
            Comerciante, atraia mais clientes e aumente sua receita agora com a{' '}
            <strong className='text-primary'>Hoop</strong>
          </h1>
          <p className='text-white text-2xl'>
            Permita que seus clientes brasileiros paguem suas compras em até 10X
            em Reais e pague à vista com Pix!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
