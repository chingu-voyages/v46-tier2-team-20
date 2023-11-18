import { useState } from 'react';

export default function RecipeDetailHook() {
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [isDetailShown, setIsDetailShown] = useState(false);

  function handleRecipeCardClick(recipe) {
    setRecipeDetail(recipe);
    setIsDetailShown(true);
  }

  function handleSummaryDetailClose() {
    setIsDetailShown(false);
  }
  return {
    recipeDetail,
    isDetailShown,
    handleRecipeCardClick,
    handleSummaryDetailClose,
  };
}
