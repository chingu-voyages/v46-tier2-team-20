import React from 'react';
import { nanoid } from 'nanoid';

import './RecipeBrief.css';

export default function RecipesBrief({ recipes }) {
  const data = recipes && recipes.map((recipe) => {
    const { name, thumbnail_url: thumbnailUrl } = recipe;
    return (
      <div key={nanoid()} className="recipe-card">
        <h1 className="recipe-name">{name}</h1>
        <img src={thumbnailUrl} alt="" className="recipe-img" />
      </div>
    );
  });
  return (
    <div className="recipe-brief-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-4">
      {data}
    </div>

  );
}
