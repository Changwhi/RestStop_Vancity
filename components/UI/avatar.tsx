import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
      {/* {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xl font-medium text-gray-700">{fallback}</span>
      )} */}
        <span className="text-xl font-medium text-gray-700">{fallback}</span>
    </div>
  );
};


export default Avatar;
