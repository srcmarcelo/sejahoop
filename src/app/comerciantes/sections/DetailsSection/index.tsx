import React from 'react';

interface DetailProps {
  title: string;
  subtitle: string;
}

const Detail: React.FC<DetailProps> = ({ title, subtitle }) => (
  <div className='flex flex-col justify-center items-center text-center max-w-xxs'>
    <h1 className='text-7xl text-tertiary mb-2 font-bold'>{title}</h1>
    <p className='text-lg text-zinc-900 leading-9 font-bold'>{subtitle}</p>
  </div>
);

const DetailsSection: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center py-14 px-6 bg-[#EDEBEB]'>
      <div className='max-w-4xl text-center mb-24 text-tertiary text-4xl font-bold'>
        Junte-se a Hoop como os outros comerciantes felizes que aumentaram seu
        volume de vendas com nosso sistema de Voucher.
      </div>
      <div className='flex justify-center items-center space-x-32 max-md:space-x-16 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-24'>
        <Detail title='83' subtitle='Clientes' />
        <Detail title='240' subtitle='Usuários de aplicativo' />
        <Detail title='15M' subtitle='De transações' />
      </div>
    </div>
  );
};

export default DetailsSection;
