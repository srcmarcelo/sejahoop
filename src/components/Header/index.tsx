'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Simulator from '../Simulator';
import MenuButton from '../MenuButton';
import { getURL } from 'next/dist/shared/lib/utils';

interface RedirectTagProps {
  name: string;
  href?: string;
  current?: boolean;
}

const RedirectTag: React.FC<RedirectTagProps> = ({
  name,
  current,
  href = '/',
}) => (
  <a
    href={href}
    data-current={current}
    className='hover:text-tertiaryLight font-semibold text-base data-[current=true]:text-tertiaryLight'
  >
    {name}
  </a>
);

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [simulatorVisible, setSimulatorVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const tab = getURL();

  const handleScroll = () => {
    setScrollPosition(window?.scrollY);
  };

  function getScreenWidth() {
    setScreenWidth(window?.innerWidth);
  }

  useEffect(function onFirstMount() {
    getScreenWidth();
    window?.addEventListener('scroll', handleScroll);
    window?.addEventListener('resize', getScreenWidth);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
      window?.removeEventListener('resize', getScreenWidth);
    };
  }, []);

  return (
    <header
      className={` ${
        scrollPosition > 0 ? 'bg-primary' : 'bg-secondary'
      } text-white fixed w-full top-0 transition-colors duration-300 shadow-sm shadow-gray-700 z-20`}
    >
      <div className='container mx-auto flex items-center justify-around py-3 max-lg:justify-between max-lg:px-8 max-sm:px-4'>
        <a href='/'>
          <Image src='/logo.webp' width={146} height={79} alt='logo' />
        </a>

        {screenWidth >= 1024 && (
          <div className='flex space-x-12'>
            <RedirectTag name='Início' current={tab === '/'} />
            <RedirectTag
              name='Quem somos'
              current={tab === '/quem-somos'}
              href='quem-somos'
            />
            <RedirectTag
              name='Comerciantes'
              current={tab === '/comerciantes'}
              href='comerciantes'
            />
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

        {screenWidth < 1024 && screenWidth > 0 && <MenuButton tab={tab} />}
      </div>

      {simulatorVisible && (
        <Simulator onClose={() => setSimulatorVisible(false)} />
      )}
    </header>
  );
};

export default Header;
