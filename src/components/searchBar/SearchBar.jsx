import { useState } from 'react';
import './SearchBar.css';
import { BiSearch, BiSolidErrorCircle } from 'react-icons/bi';

export default function SearchBar({ fetchData, isInstructionMenuOpen }) {
  const [ingredients, setIngredients] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (ingredients === '') {
      setValidationError('Please enter an ingredient(s)');
      return;
    }

    // Validate input format
    const ingredientInput = e.target.ingredient;

    if (ingredientInput.checkValidity()) {
      setValidationError('');
      fetchData(ingredients);

      // Clear error message
      setValidationError('');
    } else {
      setValidationError('Invalid: Must be at least 3 characters and separated by a space');
    }
  };

  const inputBorderColor = validationError ? 'border-red-500' : 'border-gray-200';

  const handleUserInputChange = (e) => {
    setIngredients(e.target.value);
  };

  return (
    <div className={isInstructionMenuOpen ? 'mt-48 px-5' : 'mt-8 px-5'}>
      <form
        role="search"
        className="search-bar relative mx-auto lg:mx-0"
        onSubmit={handleSearch}
        noValidate
      >
        <input
          type="text"
          pattern="^[A-Za-z]{3,}(,?\s*[a-zA-Z]{3,}\s*)*$"
          name="ingredient"
          id="ingredient"
          aria-label="Search for ingredients"
          placeholder="eggs cheese tomato..."
          className={`border-solid border-2 rounded-xl py-3 px-5 w-full ${inputBorderColor}`}
          autoComplete="off"
          value={ingredients}
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
      {validationError && (
      <p role="alert" className="text-red-600  pt-2 flex items-center justify-center lg:justify-normal ">
        <BiSolidErrorCircle className="mr-1 w-14 md:w-8 text-xl " />
        { validationError}
      </p>
      )}
    </div>
  );
}
