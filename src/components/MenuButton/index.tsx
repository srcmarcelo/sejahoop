'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Simulator from '../Simulator';

interface RedirectTagProps {
  name: string;
}

const RedirectTag: React.FC<RedirectTagProps> = ({ name }) => (
  <li className='py-2 text-center'>
    <a
      href='#'
      className='hover:text-tertiaryLight font-semibold text-base text-center'
    >
      {name}
    </a>
  </li>
);

const MenuButton: React.FC = () => {
  const [simulatorVisible, setSimulatorVisible] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className='flex items-center justify-center bg-tertiary hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg'
      >
        <GiHamburgerMenu className='text-lg' />
      </button>

      <div
        className={`fixed z-20 top-0 left-0 w-screen h-screen bg-secondary bg-opacity-95 flex justify-center items-center transition-transform ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className='absolute top-7 right-4 rounded-full bg-tertiary text-white p-2 focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <ul className='text-white text-2xl'>
          <RedirectTag name='Início' />
          <RedirectTag name='Quem somos' />
          <RedirectTag name='Comerciantes' />

          <div className='flex justify-center items-center'>
            <button
              onClick={() => setSimulatorVisible(true)}
              className='rounded-lg text-white bg-tertiaryLight ring-offset-tertiary ring-2 ring-offset-2 ring-tertiaryLight hover:ring-transparent font-semibold transition mt-12 px-4 py-2 z-10'
            >
              Simulador
            </button>
          </div>

          {simulatorVisible && (
            <Simulator onClose={() => setSimulatorVisible(false)} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
