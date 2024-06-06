import { MouseEventHandler } from 'react';

type SearchButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>; 
};

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const BUTTON_TEXT = "Find washrooms";
  return (
    <span className="flex justify-center">
      <button
        onClick={onClick}
        className="bg-black dark:bg-white hover:bg-blue-700 mt-4 text-white dark:text-black font-bold py-2 px-4 rounded"
      >
      {BUTTON_TEXT}
      </button>
    </span>
  );
};

export default SearchButton;
