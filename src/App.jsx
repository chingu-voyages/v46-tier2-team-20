import { useState } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/header/Header';
import SummaryDetail from './components/summaryDetail/SummaryDetail';
import BackgroundBlur from './components/backgroundBlur/BackgroundBlur';
import RecipeContainer from './components/recipeDisplay/RecipeContainer';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/Footer';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [isDetailShown, setIsDetailShown] = useState(false);
  //   const [isSearching, setIsSearching] = useState(false);

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
        setRecipes(response.data.results);
      } else {
        // This error message should be replaced with the error component
        setError('No recipes found - try a different ingredient');
      }
      // setIsSearching(false);
    } catch (error) {
      // setIsSearching(false);
      // Updated below as it was giving an error on Console, that object can't render
      setError(error.message);
      setIsSearching(false);
    }
  }

  function handleRecipeCardClick(recipe) {
    setRecipeDetail(recipe);
    toggleIsDetailShown();
  }

  function toggleIsDetailShown() {
    setIsDetailShown((prevIsDetailShown) => !prevIsDetailShown);
  }

  function handleSummaryDetailClose() {
    toggleIsDetailShown();
    setRecipeDetail(null);
  }

  return (
    <div className="relative">
      <Header />
      <SearchBar fetchData={fetchData} />
      <RecipeContainer
        recipes={recipes}
        handleRecipeCardClick={handleRecipeCardClick}
      />

      {isDetailShown
          && (
            <>
              <BackgroundBlur
                handleSummaryDetailClose={handleSummaryDetailClose}
              />
              <SummaryDetail
                recipeDetail={recipeDetail}
                isDetailShown={isDetailShown}
                handleSummaryDetailClose={handleSummaryDetailClose}
              />
            </>
          )}
      <Footer />
    </div>
  );
}

export default App;
