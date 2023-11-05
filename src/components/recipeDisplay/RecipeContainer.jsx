import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeContainer.css';

export default function RecipeContainer({ recipes }) {
  return (
    <div className="recipe-brief-container mx-auto w-full max-w-screen-xl">
      <RecipeCard recipes={recipes} />
    </div>
  );
}
