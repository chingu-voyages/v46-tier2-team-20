import React from 'react';
import { nanoid } from 'nanoid';

export default function RecipesBrief({ recipes, handleRecipeBriefClick }) {
  const data = recipes && recipes.map((recipe) => {
    const { name, thumbnail_url: thumbnailUrl } = recipe;

    return (
      <div key={nanoid()}>
        <img src={thumbnailUrl} />
        <h1>{name}</h1>
        <button
          onClick={() => handleRecipeBriefClick(recipe)}
        >
          View recipe details
        </button>
      </div>
    );
  });
  return data;
}
