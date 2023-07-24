import React from 'react';

interface EnterButtonProps {
  onClick: () => void;
}

const EnterButton: React.FC<EnterButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-tertiary text-white font-bold h-11 w-11 rounded-full focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline-block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default EnterButton;
