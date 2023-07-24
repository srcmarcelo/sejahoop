'use client';
import DonwloadButton from '@/components/DonwloadButton';
import Simulator from '@/components/Simulator';
import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  const [simulatorVisible, setSimulatorVisible] = React.useState(false);

  return (
    <div className='flex justify-center items-center flex-1 h-screen'>
      <Image
        src='/home.webp'
        alt='Home Background'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className='opacity-10'
      />

      <div className='flex justify-center items-center flex-col text-center w-full h-full pt-20 bg-tertiary max-md:px-4'>
        <h1 className='text-7xl text-white font-light font-sans max-w-4xl mx-auto z-10 max-lg:text-6xl max-sm:text-5xl'>
          Parcele suas compras ou faça um pix no exterior com{' '}
          <strong>HoopBank</strong>
        </h1>
        <p className='text-tertiaryLight font-bold text-md max-w-2xl mx-auto mt-12 z-10 max-sm:text-sm'>
          Pague à vista usando o PIX ou em até 12 parcelas fixas em reais no
          cartão de crédito.
        </p>
        <div className='flex space-x-4 mt-12 max-sm:space-x-2'>
          <DonwloadButton
            src='/google-play.png'
            label='DISPONIVEL NO'
            name='Google Play'
            size={20}
            style='z-10'
          />
          <DonwloadButton
            src='/apple.png'
            label='DISPONIVEL NA'
            name='Apple Store'
            size={30}
            style='z-10'
          />
        </div>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => setSimulatorVisible(true)}
            className='rounded-lg text-white bg-tertiaryLight ring-offset-tertiary ring-2 ring-offset-2 ring-tertiaryLight hover:ring-transparent font-semibold transition mt-12 px-4 py-2 z-10'
          >
            Simulador
          </button>
        </div>

        {simulatorVisible && (
          <Simulator onClose={() => setSimulatorVisible(false)} />
        )}
      </div>
    </div>
  );
};

export default HomeSection;
