import React from 'react';
import { nanoid } from 'nanoid';

import './RecipeBrief.css';

export default function RecipesBrief({ recipes }) {
  const data = recipes && recipes.map((recipe) => {
    const { name, thumbnail_url: thumbnailUrl } = recipe;
    return (
      <div key={nanoid()} className="recipe-preview-container bg-no-repeat bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${thumbnailUrl})` }}>
        <h1 className="recipe-title">{name}</h1>
      </div>
    );
  });
  return data;
}
