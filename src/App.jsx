import { useState } from 'react';
import './App.css';

import axios from 'axios';

import PulseLoader from 'react-spinners/PulseLoader';
import Header from './components/header/Header';
import SummaryDetail from './components/summaryDetail/SummaryDetail';
import BackgroundBlur from './components/backgroundBlur/BackgroundBlur';
import RecipeContainer from './components/recipeDisplay/RecipeContainer';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/Footer';
import StatusMessage from './components/statusMessage/StatusMessage';
import ErrorMessage from './components/statusMessage/ErrorMessage';

function App() {
  const [recipes, setRecipes] = useState({});
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
    setIsSearching(true);
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

  function handleRecipeBriefClick(recipe) {
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
      {isSearching && (
        <div className="flex items-center justify-center p-10">
          <PulseLoader
            color="#E93F0C"
            loading={isSearching}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {recipes.length === 0 && <StatusMessage /> }
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
