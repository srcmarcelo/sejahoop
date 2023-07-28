'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './data.json';

const MobileStores: React.FC = () => {
  const [currentSize, setCurrentSize] = useState(1);
  const sizes = [
    [640, 310],
    [560, 265],
  ];

  useEffect(() => {
    function getScreenWidth() {
      const screenWidth = window.innerWidth;
      setCurrentSize(screenWidth >= 768 ? 0 : 1);
    }

    window.addEventListener('resize', getScreenWidth);

    getScreenWidth();
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={sizes[currentSize][0]}
      width={sizes[currentSize][1]}
    />
  );
};

export default MobileStores;
