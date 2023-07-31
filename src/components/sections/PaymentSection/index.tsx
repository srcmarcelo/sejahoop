import Image from 'next/image';
import React from 'react';

const PaymentSection: React.FC = () => {
  return (
    <div className='flex justify-center items-center space-x-16 flex-1 pt-12 max-lg:flex-col max-lg:space-x-0 max-lg:pt-0'>
      <div className='flex flex-col justify-center items-start max-sm:items-center max-sm:px-4'>
        <h1 className='text-3xl font-bold text-black mb-2 max-w-sm'>Pagamento seguro</h1>
        <p className='text-base font-light text-black max-w-sm max-sm:text-center'>
          Com apenas alguns cliques, você pode facilmente pagar com seu cartão
          de crédito e gerenciar seus pagamentos usando o aplicativo{' '}
          <strong>HoopBank</strong>.
        </p>
      </div>
      <div className='flex'>
        <Image
          src='/credit-cards.webp'
          alt='Credit Cards'
          height={343}
          width={543}
        />
      </div>
    </div>
  );
};

export default PaymentSection;
