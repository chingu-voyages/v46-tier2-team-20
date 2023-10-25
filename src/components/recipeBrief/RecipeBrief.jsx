import React from 'react';
import { nanoid } from 'nanoid';

export default function RecipesBrief({ recipes, handleRecipeBriefClick }) {
  const data = recipes && recipes.map((recipe) => {
    const { name, thumbnail_url: thumbnailUrl, id } = recipe;

    return (
      <div key={nanoid()}>
        <img src={thumbnailUrl} />
        <h1>{name}</h1>
        <button
          onClick={() => handleRecipeBriefClick(id)}
        >
          View recipe details
        </button>
      </div>
    );
  });
  return data;
}
