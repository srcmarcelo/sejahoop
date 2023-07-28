import Sucess from '@/animations/Sucess';
import DonwloadButton from '@/components/DonwloadButton';
import React from 'react';

const MobileSection: React.FC = () => {
  return (
    <div className='flex justify-center items-center space-x-16 flex-1 py-12 max-lg:flex-col-reverse max-lg:space-x-0 max-lg:pt-0'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-primary mb-4 text-center max-sm:text-3xl'>Cadastro rápido e fácil</h1>
        <p className='text-xl text-tertiary mb-6 text-center max-sm:text-lg'>
          Baixe o aplicativo e se cadastre instantaneamente
        </p>
        <DonwloadButton
          src='/apple.png'
          label='DISPONIVEL NA'
          name='Apple Store'
          size={30}
        />
      </div>
      <div className='flex'>
        <Sucess />
      </div>
    </div>
  );
};

export default MobileSection;
