'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './data.json';

const Success: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={340} width={340} />;
};

export default Success;
