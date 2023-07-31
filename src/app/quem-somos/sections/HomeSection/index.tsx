import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <div className='flex justify-center items-end flex-1 h-screen pt-20'>
      <Image
        src='/home.webp'
        alt='Home Background'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className='opacity-10 pt-24'
      />

      <div className='flex justify-center items-center flex-col text-left w-full h-full px-4 bg-tertiaryLight'>
        <div className='max-w-3xl'>
          <h1 className='text-6xl text-primary font-semibold mx-auto mb-10 z-10 max-sm:text-4xl max-sm:mb-4'>
            Uma solução que faz parte da{' '}
            <strong className='underline'>HoopBank</strong>
          </h1>
          <div className='border-t-4 border-zinc-900 w-52 text-transparent h-1 mb-10 max-sm:mb-4'>
            divider
          </div>
          <div className='space-y-4 max-sm:space-y-2'>
            <p className='text-zinc-900 font-semibold text-xl max-sm:text-base'>
              Fazemos parte do arranjo de pagamento operando via registradora
              CIP (camara interbancária de Pagamentos), estamos no mercado desde
              2019, desenvolvemos um sistema de controle de pagamentos
              eletrônicos, cupons e vouchers.
            </p>
            <p className='text-zinc-900 font-semibold text-xl max-sm:text-base'>
              Com o sistema Hoop, podemos ajudar seu estabelecimento no Brasil e
              Estados Unidos com melhores taxas para máquinas de cartão física e
              e-commerce.
            </p>
            <p className='text-zinc-900 font-semibold text-xl max-sm:text-base'>
              Criamos uma forma de pagamento com os melhores serviços e
              tecnologia para garantir uma experiência rápida, fácil e segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
