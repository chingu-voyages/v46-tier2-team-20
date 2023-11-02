import { useState } from 'react';
import './App.css';

import axios from 'axios';

import RecipeBrief from './components/RecipesDisplay/RecipeBrief';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  // I'm thinking setIngredients will be passed as props to the search bar
  const [recipes, setRecipes] = useState(null);
  // const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('Add an ingredient to search!');

  // This function could potentially be moved out to a "utils" folder?
  // In that case, I think the response or error could be returned,
  // and then used with setRecipes or setError here
  async function fetchData(ingredientString) {
    // setIsSearching(true);

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {
        from: '0',
        size: '20',
        q: ingredientString,
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.count > 0) {
        // The returned data object has two properties - count and results.
        // Results is an array of recipe data objects.
        // console.log(response.data.results);
        setRecipes(response.data.results);
      } else {
        // This error message should be replaced with the error component
        setError('No recipes found - try a different ingredient');
      }
      // setIsSearching(false);
    } catch (error) {
      setError(error);
      // setIsSearching(false);
    }
  }

  return (
    <div>
      <Header />
      <SearchBar
        fetchData={fetchData}
      />
      <RecipeBrief recipes={recipes} />
    </div>
  );
}

export default App;
