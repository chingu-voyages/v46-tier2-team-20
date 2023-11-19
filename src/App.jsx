import { useState } from 'react';
import './App.css';

import axios from 'axios';

import PulseLoader from 'react-spinners/PulseLoader';
import Header from './components/header/Header';
import SummaryDetail from './components/summaryDetail/SummaryDetail';
import BackgroundBlur from './components/backgroundBlur/BackgroundBlur';
import RecipeContainer from './components/recipeDisplay/RecipeContainer';
import InstructionMenu from './components/instructionMenu/InstructionMenu';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/Footer';
import StatusMessage from './components/statusMessage/StatusMessage';
import ErrorMessage from './components/statusMessage/ErrorMessage';
import InstructionMenuHook from './hooks/InstructionMenuHook';
import RecipeDetailHook from './hooks/RecipeDetailHook';

function App() {
  const [recipes, setRecipes] = useState({});
  const [isSearched, setIsSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { isInstructionMenuOpen, toggleInstructionMenu } = InstructionMenuHook();
  const {
    recipeDetail,
    isDetailShown,
    handleRecipeCardClick,
    handleSummaryDetailClose,
  } = RecipeDetailHook();

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
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <InstructionMenu
          toggleInstructionMenu={toggleInstructionMenu}
          isInstructionMenuOpen={isInstructionMenuOpen}
        />
        <SearchBar
          fetchData={fetchData}
          isInstructionMenuOpen={isInstructionMenuOpen}
        />
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
        {!hasError && recipes.length === 0 && <StatusMessage /> }
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
