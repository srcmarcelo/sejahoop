'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Simulator from '../Simulator';
import MenuButton from '../MenuButton';

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
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  function getScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    getScreenWidth();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', getScreenWidth);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', getScreenWidth);
    };
  }, []);

  return (
    <header
      className={` ${
        scrollPosition > 0 ? 'bg-primary' : 'bg-secondary'
      } text-white fixed w-full top-0 transition-colors duration-300 z-20`}
    >
      <div className='container mx-auto flex items-center justify-around py-3 max-lg:justify-between max-lg:px-8 max-sm:px-4'>
        <Image src='/logo.webp' width={146} height={79} alt='logo' />

        {screenWidth >= 1024 && (
          <div className='flex space-x-12'>
            <RedirectTag name='Início' />
            <RedirectTag name='Quem somos' />
            <RedirectTag name='Comerciantes' />
          </div>
        )}

        {screenWidth >= 1024 && (
          <button
            onClick={() => setSimulatorVisible(true)}
            className={`rounded-lg bg-tertiaryLight mb-1 ring-2 ring-offset-2 ${
              scrollPosition > 0
                ? 'ring-offset-primary'
                : 'ring-offset-secondary'
            } ring-tertiaryLight hover:ring-transparent hover:mb-0 font-semibold transition px-4 py-2`}
          >
            Simulador
          </button>
        )}

        {screenWidth < 1024 && (
          <MenuButton />
        )}
      </div>

      {simulatorVisible && (
        <Simulator onClose={() => setSimulatorVisible(false)} />
      )}
    </header>
  );
};

export default Header;
