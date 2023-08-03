import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  AiOutlinePercentage,
  AiOutlineDollarCircle,
  AiOutlineWifi,
  AiOutlineLock,
} from 'react-icons/ai';

interface AdvantageProps {
  icon: ReactNode;
  label: string;
  description: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icon, label, description }) => (
  <div className='max-w-xs text-center flex justify-between items-center flex-col px-8 h-64 shrink-0'>
    <div className='text-center flex justify-start items-center flex-col flex-1'>
      <div className='text-6xl text-primary mb-4'>{icon}</div>
      <p className='text-lg text-primary font-bold'>{label}</p>
    </div>
    <div className='tex-base text-zinc-800 font-bold flex-1 flex justify-center items-center text-center shrink-0'>
      {description}
    </div>
  </div>
);

const AdvantageSection: React.FC = () => {
  return (
    <div className='flex justify-around items-center bg-tertiaryLight space-y-12 flex-1 py-12 flex-wrap w-full'>
      <Advantage
        icon={<AiOutlinePercentage />}
        label='Sem taxas'
        description='O Hoopbank é gratuito e também vem com suporte comercial gratuito e treinamento pessoal.'
      />
      <Advantage
        icon={<AiOutlineDollarCircle />}
        label='Você é pago em até 1 dias útil'
        description='Você é pago em até 1 dias útil'
      />
      <Advantage
        icon={<AiOutlineWifi />}
        label='É simples'
        description='O Hoopbank é 100% online e não requer instalação de sua parte.'
      />
      <Advantage
        icon={<AiOutlineLock />}
        label='Pagamento seguro'
        description='Tecnologia de ponta com gestão de crédito e antifraude. Verificação do comportamento de compra do usuário do cartão e da CPFS.'
      />
    </div>
  );
};

export default AdvantageSection;
