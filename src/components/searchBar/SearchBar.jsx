// import React from 'react'
import './SearchBar.css';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
  return (
    <form className="search-bar relative">
      <input
        type="text"
        aria-label="search"
        placeholder="eggs tomato cheese..."
        className="border-solid border-2 border-gray-200 rounded-xl py-3 px-5 w-full"
      />
      <button type="button" aria-label="search" className="search-bar__icon absolute inset-y-0 right-[5%]">
        <BiSearch className="fill-gray-400 w-5 h-5" />
      </button>
    </form>
  );
}
