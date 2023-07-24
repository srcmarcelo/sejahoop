'use client';
import React, { useEffect, useState } from 'react';
import CurrencySelect from '../CurrencySelect';
import CurrencyInput from 'react-currency-input-field';
import EnterButton from '../EnterButton';

type OptionValues = 'USD' | 'EUR' | 'BRL';

interface SimulatorProps {
  onClose: () => void;
}

const prefixes = {
  USD: 'US$ ',
  BRL: 'R$ ',
  EUR: '€ ',
};

const Simulator: React.FC<SimulatorProps> = ({ onClose }) => {
  const [mode, setMode] = useState<'parcel' | 'pix'>('parcel');
  const [selectedOption, setSelectedOption] = useState<OptionValues>('USD');
  const [value, setValue] = useState<string>('0');
  const [currencyValue, setCurrencyValue] = useState<string>('0');
  const [convertedValue, setConvertedValue] = useState<number>(0);

  useEffect(() => {
    const endpoint = `https://economia.awesomeapi.com.br/last/${selectedOption}-BRL`;
    const fetchAll = async () => {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const value = await res.json();

      setCurrencyValue(value[`${selectedOption}BRL`]?.bid);
    };

    if (selectedOption === 'BRL') {
      setCurrencyValue('1.00');
    } else {
      fetchAll();
    }
  }, [selectedOption]);

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-transparent backdrop-blur-md'></div>

      <button
        onClick={onClose}
        className='absolute top-16 right-16 rounded-full bg-tertiary text-white p-2 focus:outline-none'
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

      <div className='bg-gray-200 bg-opacity-50 rounded-lg px-3 pt-6 relative w-5/12'>
        <div className='bg-gray-400 bg-opacity-50 p-1 mb-6 rounded-lg flex w-full'>
          <div
            className={`px-12 py-2 flex-1 flex justify-center items-center ${
              ['parcel'].includes(mode) && 'bg-tertiary'
            } rounded-lg transition-colors duration-400`}
          >
            <a
              className='text-lg cursor-pointer text-white w-full text-center'
              onClick={() => setMode('parcel')}
            >
              Simulador Parcelas
            </a>
          </div>
          <div
            className={`px-12 py-2 flex-1 flex justify-center items-center ${
              ['pix'].includes(mode) && 'bg-tertiary'
            } rounded-lg transition-colors duration-400`}
          >
            <a
              className='text-lg cursor-pointer text-white w-full text-center'
              onClick={() => setMode('pix')}
            >
              Simulador Pix
            </a>
          </div>
        </div>
        <div className='rounded-full bg-white w-full h-14 p-2 mb-4 flex justify-start items-center'>
          <CurrencySelect
            onSelect={setSelectedOption}
            selectedOption={selectedOption}
          />
          <CurrencyInput
            prefix={prefixes[selectedOption]}
            value={value}
            decimalSeparator='.'
            groupSeparator=' '
            onValueChange={(value) => setValue(value || '0')}
            className='text-black outline-none pl-2 text-2xl flex-1'
          />
          <EnterButton
            onClick={() =>
              setConvertedValue(parseFloat(value) * parseFloat(currencyValue))
            }
          />
        </div>
        <div className='flex space-x-2 mb-4 text-white'>
          <div className='text-lg font-medium'>Taxa de câmbio:</div>
          <div className='text-lg font-bold'>{currencyValue}</div>
        </div>
        {convertedValue > 0 && (
          <div className='h-28 w-full mb-4 bg-white text-black flex flex-col justify-center items-end rounded-lg text-center'>
            <div className='text-4xl flex-1 flex justify-center items-center text-center w-full'>
              {convertedValue.toFixed(2)} BRL
            </div>
            <div className='w-full rounded-b-lg flex justify-center items-center h-6 text-xs text-black bg-yellow-400'>
              Os valores simulados são sujeitos à alteração e podem variar
              conforme loja conveniada.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulator;
