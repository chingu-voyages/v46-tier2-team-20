import React from 'react';
import RecipesBrief from './RecipeBrief';

export default function RecipeContainer({ recipes }) {
  return (
    <div className="recipe-brief-container mx-auto w-full max-w-screen-xl">
      <RecipesBrief recipes={recipes} />
    </div>
  );
}
