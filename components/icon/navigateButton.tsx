import React, { FC } from 'react';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

const  NavigateButtonIcon: FC<IconProps> = ({ width = 38, height = 50, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="38" height="50" fill="url(#pattern0_12_248)" />
      <defs>
        <pattern id="pattern0_12_248" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_12_248" transform="matrix(0.0111111 0 0 0.00844444 0 0.12)" />
        </pattern>
        <image
          id="image0_12_248"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default NavigateButtonIcon;
