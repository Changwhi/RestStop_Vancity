import { MouseEventHandler } from 'react';

type SearchButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>; 
};

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <span className="flex justify-center">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded"
      >
        Click
      </button>
    </span>
  );
};

export default SearchButton;
