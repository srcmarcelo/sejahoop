import MobileStores from '@/animations/MobileStores';
import DonwloadButton from '@/components/DonwloadButton';
import React from 'react';

const StoresSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/stores-section.webp)'}}
      className='flex bg-no-repeat bg-tertiaryDark justify-center items-end space-x-16 flex-1 max-h-145 mb-16 max-md:flex-col max-md:space-x-0 max-md:items-center max-md:max-h-none max-md:py-4 max-lg:mt-16'
    >
      <div className='flex justify-centerc items-center'>
        <MobileStores />
      </div>
      <div className='flex flex-col justify-center items-center place-self-center max-w-sm max-md:pt-4 max-sm:max-w-xs'>
        <p className='text-3xl text-white mb-6 text-center max-sm:text-2xl'>
          Você pode pedir para pagar com <strong>HoopBank</strong> quando
          estiver em uma loja participante.
        </p>
        <DonwloadButton
          src='/apple.png'
          label='DISPONIVEL NA'
          name='Apple Store'
          size={30}
        />
      </div>
    </div>
  );
};

export default StoresSection;
