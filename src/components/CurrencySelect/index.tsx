import React from 'react';

type OptionValues = 'USD' | 'EUR' | 'BRL';

interface CurrencySelectProps {
  selectedOption: string;
  onSelect: (option: OptionValues) => void;
}

interface Option {
  value: OptionValues;
  flag: string;
}

const options: Option[] = [
  {
    value: 'USD',
    flag: '🇺🇸',
  },
  {
    value: 'EUR',
    flag: '🇪🇺',
  },
  {
    value: 'BRL',
    flag: '🇧🇷',
  },
];

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  selectedOption,
  onSelect,
}) => {
  const handleOptionSelect = (option: any) => {
    onSelect(option);
  };

  return (
    <div className='w-36 h-full rounded-full bg-tertiary flex justify-center items-center max-sm:w-24'>
      <select
        className='text-lg px-4 rounded-full bg-tertiary space-x-3 font-medium text-white outline-none max-sm:px-1 max-sm:text-sm'
        onChange={(e) => handleOptionSelect(e.target.value)}
        value={selectedOption}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.flag} {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
