import React from 'react';
import './RecipeBrief.css';

export default function RecipesBrief({ recipes }) {
  const data = recipes && recipes.map((recipe) => {
    const { name, thumbnail_url: thumbnailUrl, id } = recipe;
    return (
      <div key={id} className="relative">
        <h1 className="absolute bottom-0 left-0 p-4 text-white text-xl md:text-2xl lg:text-3xl xl:text-3xl">{name}</h1>
        <img src={thumbnailUrl} alt={name} className="recipe-img w-full h-auto rounded-xl" />
      </div>
    );
  });
  return (
    <div className="recipe-brief-container mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        {data}
      </div>
    </div>

  );
}
