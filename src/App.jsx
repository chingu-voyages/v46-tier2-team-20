import { useState } from 'react';
import './App.css';
import axios from 'axios';

import RecipesDisplay from './components/RecipesDisplay/RecipesDisplay';

function App() {
  // I'm thinking setIngredients will be passed as props to the search bar
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('Add an ingredient to search!');

  // This function could potentially be moved out to a "utils" folder?
  // In that case, I think the response or error could be returned, and then used with setRecipes or setError here
  async function fetchData(ingredientString) {
    setIsSearching(true);

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {
        from: '0',
        size: '20',
        q: ingredientString,
      },
      headers: {
        'X-RapidAPI-Key': '76d7fe0a0fmsh0e82783d702bde2p14d53ajsn1fb5e9f06c51',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.count > 0) {
        // The returned data object has two properties - count and results.
        // Results is an array of recipe data objects.
        console.log(response.data.results);
        setRecipes(response.data.results);
      } else {
        setError('No recipes found - try a different ingredient');
      }
      setIsSearching(false);
    } catch (error) {
      setError(error);
      setIsSearching(false);
    }
  }

  // I'm thinking this function will be passed as props to the search bar
  function handleSearch(e) {
    e.preventDefault();

    if (ingredients.length === 0) {
      setError('Please input an ingredient');
      return;
    }

    fetchData(ingredients);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-orange-500 font-bold underline text-center">
          Recipe App
        </h1>
        <form onSubmit={handleSearch}>
          <label>Ingredient(s)</label>
          <input
            type="text"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button className="search-btn" type="submit" disabled={isSearching}>Search!</button>
        </form>
        {isSearching && <p>Searching...</p>}
        {recipes ? (
          <p>
            {recipes.length}
            {' '}
            recipes found!
          </p>
        ) : <p>{error}</p>}
      </div>
      {/*  */}
      <RecipesDisplay recipes={recipes} />
    </>
  );
}

export default App;
