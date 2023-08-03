import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <button
      className='bg-red-500 text-white flex justify-center items-center text-3xl font-bold h-11 w-11 rounded-full focus:outline-none focus:shadow-outline'
      onClick={onClick}
    >
      <AiOutlineClose />
    </button>
  );
};

export default CancelButton;
