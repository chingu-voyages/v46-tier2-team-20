/* eslint-disable linebreak-style */
import { useState } from 'react';
import './App.css';

import axios from 'axios';

import { isEmpty } from 'lodash';
import Header from './components/header/Header';
import SummaryDetail from './components/summaryDetail/SummaryDetail';
import BackgroundBlur from './components/backgroundBlur/BackgroundBlur';
import RecipeContainer from './components/recipeDisplay/RecipeContainer';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/Footer';
import StatusMessage from './components/statusMessage/StatusMessage';
import ErrorMessage from './components/statusMessage/ErrorMessage';

import recipeData from './recipeData.js';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [isDetailShown, setIsDetailShown] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);

  // This function could potentially be moved out to a "utils" folder?
  // In that case, I think the response or error could be returned,
  // and then used with setRecipes or setError here
  async function fetchData(ingredientString) {
    setIsSearched(true);
    setRecipes({});
    setHasError(false);

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
      setRecipes(response.data.results);
    } catch (error) {
      setRecipes(null);
      setHasError(true);
    }
    setIsSearching(false);
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
      { isSearched && isEmpty(recipes) && !hasError && <StatusMessage /> }
      { hasError && <ErrorMessage /> }
      {isSearched && <RecipeContainer recipes={recipes} handleRecipeBriefClick={handleRecipeBriefClick} />}
      { isDetailShown
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

// Currently using dummyData to save API calls => Replace later "fetchData" with below function
// async function fetchData(ingredientString) {
//   // setIsSearching(true);

//   const options = {
//     method: 'GET',
//     url: 'https://tasty.p.rapidapi.com/recipes/list',
//     params: {
//       from: '0',
//       size: '20',
//       q: ingredientString,
//     },
//     headers: {
//       'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
//       'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     if (response.data.count > 0) {
//       setRecipes(response.data.results);
//     } else {
//       setError('No recipes found - try a different ingredient');
//     }
//     // setIsSearching(false);
//   } catch (error) {
//     // setIsSearching(false);
//     setError(error.message);
//     setIsSearching(false);
//   }
// }
