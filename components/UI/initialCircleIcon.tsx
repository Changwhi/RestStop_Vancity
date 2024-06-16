import React from 'react';

interface InitialCircleIconProps {
  initial: string;
  bgColor: string;
}

const InitialCircleIcon: React.FC<InitialCircleIconProps> = ({ initial, bgColor }) => {
  return (
    <div className={`flex items-center justify-center h-12 w-12 rounded-full ${bgColor} text-white`}>
      <span className="text-lg font-bold">{initial}</span>
    </div>
  );
};

export default InitialCircleIcon;
