import DonwloadButton from '@/components/DonwloadButton';
import React from 'react';

const StorekeeperSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/storekeeper.webp)' }}
      className='flex bg-scroll bg-center bg-no-repeat bg-white justify-center items-end space-x-16 flex-1 max-h-165 max-md:flex-col max-md:space-x-0 max-md:items-center max-md:max-h-none max-md:py-4 max-lg:mt-16'
    >
      <div className='flex flex-col justify-center items-center py-40 flex-1  h-full w-full px-10'>
        <h1 className='text-6xl text-primary font-bold mb-6 text-center max-sm:text-5xl'>Comerciante</h1>
        <p className='text-2xl text-gray-700 font-semibold mb-16 text-center'>
          Atraia mais clientes e aumente sua receita usando o Hoop
        </p>
        <button className='bg-primary hover:bg-white text-white hover:text-primary font-semibold py-2 px-4 border-primary hover:border-primary'>
          Conheça agora
        </button>
      </div>
    </div>
  );
};

export default StorekeeperSection;
