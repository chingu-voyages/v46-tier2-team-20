import { useState } from 'react';
import './App.css';
import './index.css';

// import axios from 'axios';

import Header from './components/header/Header';
import SummaryDetail from './components/summaryDetail/SummaryDetail';
import BackgroundBlur from './components/backgroundBlur/BackgroundBlur';
import RecipeContainer from './components/recipeDisplay/RecipeContainer';
import InstructionMenu from './components/instructionMenu/InstructionMenu';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/Footer';
import InstructionMenuHook from './hooks/InstructionMenuHook';

import recipeData from './recipeData';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [isDetailShown, setIsDetailShown] = useState(false);
  const { isInstructionMenuOpen, toggleInstructionMenu } = InstructionMenuHook();
  //   const [isSearching, setIsSearching] = useState(false);

  function fetchData(ingredientString) {
    const searchedString = ingredientString.toLowerCase();
    const data = recipeData.results.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      if (recipeName.includes(searchedString)) {
        return recipe;
      }
    });
    setRecipes(data);
  }

  function handleRecipeCardClick(recipe) {
    setRecipeDetail(recipe);
    setIsDetailShown(true);
  }

  // function toggleIsDetailShown() {
  //   setIsDetailShown((prevIsDetailShown) => !prevIsDetailShown);
  // }

  function handleSummaryDetailClose() {
    setIsDetailShown(false);
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
      </div>
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
