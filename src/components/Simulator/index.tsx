'use client';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import CurrencySelect from '../CurrencySelect';
import CurrencyInput from 'react-currency-input-field';
import EnterButton from '../EnterButton';
import Table from './Table';
import CancelButton from '../CancelButton';

type OptionValues = 'USDT' | 'EUR' | 'BRL';

interface SimulatorProps {
  onClose: () => void;
}

const prefixes = {
  USDT: 'US$ ',
  BRL: 'R$ ',
  EUR: '€ ',
};

const Simulator: React.FC<SimulatorProps> = ({ onClose }) => {
  const [mode, setMode] = useState<'parcel' | 'pix'>('parcel');
  const [selectedOption, setSelectedOption] = useState<OptionValues>('USDT');
  const [value, setValue] = useState<string | undefined>('0');
  const [currencyValue, setCurrencyValue] = useState<string>('0');
  const [convertedValue, setConvertedValue] = useState<number>(0);

  useEffect(() => {
    const endpoint = `https://economia.awesomeapi.com.br/last/${selectedOption}-BRL`;
    const fetchAll = async () => {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await res.json();

      const currencyValue =
        result[`${selectedOption === 'EUR' ? 'EURBRL' : 'USDBRLT'}`]?.ask;

      setCurrencyValue(currencyValue);

      setConvertedValue(parseFloat(value || '0') * parseFloat(currencyValue));
    };

    if (selectedOption === 'BRL') {
      setCurrencyValue('1.00');
      setConvertedValue(parseFloat(value || '0'));
    } else {
      fetchAll();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('type event:', event);
    if (event.key === 'Enter') {
      setConvertedValue(parseFloat(value || '0') * parseFloat(currencyValue));
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-transparent backdrop-blur-md'></div>

      <button
        onClick={onClose}
        className='absolute top-16 right-16 rounded-full bg-tertiary text-white p-2 focus:outline-none max-lg:right-4 max-lg:top-7'
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

      <div className='bg-gray-200 bg-opacity-50 rounded-lg px-3 py-6 relative w-auto max-h-[500px] overflow-y-auto border-y-8 border-gray-200 border-opacity-0 max-sm:w-11/12'>
        <div className='bg-gray-400 bg-opacity-50 p-1 mb-6 rounded-lg flex w-full'>
          <div
            className={`px-12 py-2 flex-1 flex justify-center items-center ${
              ['parcel'].includes(mode) && 'bg-tertiary'
            } rounded-lg transition-colors duration-400 max-sm:px-4`}
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
            } rounded-lg transition-colors duration-400 max-sm:px-4`}
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
            min={0}
            onValueChange={(value) => setValue(value)}
            onKeyDown={handleKeyDown}
            className='text-black outline-none pl-2 text-2xl flex-1 max-sm:w-5/12'
          />
          {convertedValue <= 0 ? (
            <EnterButton
              onClick={() =>
                setConvertedValue(
                  parseFloat(value || '0') * parseFloat(currencyValue)
                )
              }
            />
          ) : (
            <CancelButton
              onClick={() => {
                setValue('0');
                setConvertedValue(0);
              }}
            />
          )}
        </div>

        <div className='flex space-x-2 mb-4 text-white'>
          <div className='text-lg font-medium'>Taxa de câmbio:</div>
          <div className='text-lg font-bold'>{currencyValue}</div>
        </div>

        {convertedValue > 0 &&
          (mode === 'parcel' ? (
            <Table value={convertedValue} />
          ) : (
            <div className='h-28 w-full bg-white text-black flex flex-col justify-center items-end rounded-lg text-center'>
              <div className='text-4xl flex-1 flex justify-center items-center text-center w-full'>
                {(convertedValue * 1.03).toFixed(2)} BRL
              </div>
              <div className='w-full rounded-b-lg flex justify-center items-center h-6 text-xs text-black bg-yellow-400 max-sm:h-9'>
                Os valores simulados são sujeitos à alteração e podem variar
                conforme loja conveniada.
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Simulator;
