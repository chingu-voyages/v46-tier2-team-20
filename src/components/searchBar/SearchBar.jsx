// import { useState } from 'react';
import './SearchBar.css';
import { BiSearch } from 'react-icons/bi';
// import { IoCloseCircleSharp } from 'react-icons/io5';

export default function SearchBar({ handleSearch, setIngredients }) {
  const handleUserInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleReset = () => {
    setIngredients('');
  };

  return (
    <form role="search" className="search-bar relative" onSubmit={handleSearch} onReset={handleReset}>
      <input
        type="text"
        name="ingredient"
        aria-label="Search for ingredients"
        placeholder="eggs tomato cheese..."
        className="border-solid border-2 border-gray-200 rounded-xl py-3 px-5 w-full"
        onChange={handleUserInputChange}
        required
      />
      <button
        type="submit"
        aria-label="search"
        className="search-bar__icon--submit absolute inset-y-0 right-[5%]"
      >
        <BiSearch className="fill-gray-400 w-5 h-5" />
      </button>
    </form>
  );
}
