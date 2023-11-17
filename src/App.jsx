import { useState } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/header/Header';
import SummaryDetail from './components/summaryDetail/SummaryDetail';
import BackgroundBlur from './components/backgroundBlur/BackgroundBlur';
import RecipeContainer from './components/recipeDisplay/RecipeContainer';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/Footer';
import StatusMessage from './components/statusMessage/StatusMessage';
import ErrorMessage from './components/statusMessage/ErrorMessage';
import PulseLoader from 'react-spinners/PulseLoader';

function App() {
  const [recipes, setRecipes] = useState({});
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [isDetailShown, setIsDetailShown] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);


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

  function handleRecipeCardClick(recipe) {
    setRecipeDetail(recipe);
    setIsDetailShown(true);
  }

  function handleSummaryDetailClose() {
    setIsDetailShown(false);
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="flex-grow">
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
        {isSearched && (
          <RecipeContainer
            recipes={recipes}
            handleRecipeCardClick={handleRecipeCardClick}
          />
        )}
        {isDetailShown && (
          <BackgroundBlur
            handleSummaryDetailClose={handleSummaryDetailClose}
          />
        )}
        <SummaryDetail
          recipeDetail={recipeDetail}
          isDetailShown={isDetailShown}
          handleSummaryDetailClose={handleSummaryDetailClose}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
