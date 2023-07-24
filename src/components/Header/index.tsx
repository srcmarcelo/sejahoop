'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Simulator from '../Simulator';

interface RedirectTagProps {
  name: string;
}

const RedirectTag: React.FC<RedirectTagProps> = ({ name }) => (
  <a href='#' className='hover:text-tertiaryLight font-semibold text-base'>
    {name}
  </a>
);

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [simulatorVisible, setSimulatorVisible] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={` ${
        scrollPosition > 0 ? 'bg-primary' : 'bg-secondary'
      } text-white fixed w-full top-0 transition-colors duration-300 z-20`}
    >
      <div className='container mx-auto flex items-center justify-between py-3 px-8'>
        <Image src='/logo.webp' width={146} height={79} alt='logo' />

        <div className='flex space-x-12'>
          <RedirectTag name='Início' />
          <RedirectTag name='Quem somos' />
          <RedirectTag name='Comerciantes' />
          <RedirectTag name='Sobre' />
          <RedirectTag name='Funcionalidades' />
        </div>

        <button
          onClick={() => setSimulatorVisible(true)}
          className={`rounded-lg bg-tertiaryLight mb-1 ring-2 ring-offset-2 ${
            scrollPosition > 0 ? 'ring-offset-primary' : 'ring-offset-secondary'
          } ring-tertiaryLight hover:ring-transparent hover:mb-0 font-semibold transition px-4 py-2`}
        >
          Simulador
        </button>
      </div>

      {simulatorVisible && (
        <Simulator onClose={() => setSimulatorVisible(false)} />
      )}
    </header>
  );
};

export default Header;
